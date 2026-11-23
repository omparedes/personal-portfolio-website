const assert = require("node:assert/strict")
const { spawn } = require("node:child_process")
const fs = require("node:fs/promises")
const os = require("node:os")
const path = require("node:path")
const { setTimeout: delay } = require("node:timers/promises")

const base = process.env.PORTFOLIO_DEV_URL ?? "http://localhost:3000"
const chromePath = process.env.PORTFOLIO_CHROME ?? (process.platform === "win32"
  ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
  : "chromium")
const screenshots = process.argv[2]

async function verify() {
  const profile = await fs.mkdtemp(path.join(os.tmpdir(), "portfolio-gallery-"))
  const chrome = spawn(chromePath, [
    "--headless=new", "--no-first-run", "--disable-extensions", "--disable-background-networking",
    "--hide-scrollbars", "--remote-debugging-address=127.0.0.1", "--remote-debugging-port=0",
    `--user-data-dir=${profile}`, "about:blank",
  ], { windowsHide: true, stdio: "ignore" })
  let socket
  let launchError
  chrome.on("error", error => { launchError = error })

  async function eventually(check) {
    for (let attempt = 0; attempt < 120; attempt++) {
      const value = await check()
      if (value) return value
      await delay(125)
    }
    throw new Error(`Timed out: ${check}`)
  }

  try {
    const port = await eventually(async () => {
      if (launchError) throw launchError
      try {
        return Number((await fs.readFile(path.join(profile, "DevToolsActivePort"), "utf8")).split("\n")[0])
      } catch (error) {
        if (error.code !== "ENOENT") throw error
        return 0
      }
    })
    const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()
    socket = new WebSocket(targets.find(target => target.type === "page").webSocketDebuggerUrl)
    await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject })
    let id = 0
    const pending = new Map()
    const exceptions = []
    socket.onmessage = ({ data }) => {
      const message = JSON.parse(data)
      if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails)
      if (!message.id) return
      const { resolve, reject } = pending.get(message.id)
      pending.delete(message.id)
      if (message.error) reject(new Error(message.error.message))
      else resolve(message.result)
    }
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      pending.set(++id, { resolve, reject })
      socket.send(JSON.stringify({ id, method, params }))
    })
    const evaluate = async expression => {
      const response = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })
      if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description ?? response.exceptionDetails.text)
      return response.result.value
    }
    const until = expression => eventually(async () => {
      try {
        return await evaluate(expression)
      } catch (error) {
        if (!/context/i.test(error.message)) throw error
        return false
      }
    })
    const key = async (name, code, keyCode) => {
      for (const type of ["keyDown", "keyUp"]) {
        await send("Input.dispatchKeyEvent", { type, key: name, code, windowsVirtualKeyCode: keyCode })
      }
    }
    async function tap(selector) {
      const point = await evaluate(`(() => {
        const target = document.querySelector(${JSON.stringify(selector)});
        target.scrollIntoView({ block: 'center' });
        const rect = target.getBoundingClientRect();
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
      })()`)
      await send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [point] })
      await send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] })
    }
    async function capture(name, full = false) {
      if (!screenshots) return
      await evaluate("document.querySelector('nextjs-portal')?.style.setProperty('display','none','important')")
      if (full) await evaluate("window.scrollTo(0,0)")
      const clip = full ? await evaluate("({x:0,y:0,width:innerWidth,height:document.documentElement.scrollHeight,scale:1})") : undefined
      const { data } = await send("Page.captureScreenshot", {
        format: "webp", quality: 85, captureBeyondViewport: full, ...(clip ? { clip } : {}),
      })
      await fs.writeFile(path.join(screenshots, name + ".webp"), Buffer.from(data, "base64"))
    }
    async function open(url, expectedHeading) {
      await send("Page.navigate", { url })
      await until(`location.href === ${JSON.stringify(url)} && document.readyState === 'complete' && document.querySelector('h1')?.innerText === ${JSON.stringify(expectedHeading)}`)
      await evaluate("document.fonts.ready.then(() => true)")
    }

    await send("Page.bringToFront")
    await send("Page.enable")
    await send("Runtime.enable")
    if (screenshots) await fs.mkdir(screenshots, { recursive: true })
    const catalog = `${base}/projects`
    for (const [device, width, height] of [["escritorio", 1440, 900], ["movil", 390, 844]]) {
      const mobile = device === "movil"
      await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile })
      await send("Emulation.setTouchEmulationEnabled", { enabled: mobile })
      for (const [theme, language] of [["dark", "es"], ["light", "en"]]) {
        for (const [slug, title] of [["sigcoop", "SIGCOOP"], ["smartparking", "SmartParking"]]) {
          await open(`${catalog}/${slug}?lang=${language}&theme=${theme}&q=Angular&specialty=frontend`, title)
          assert.equal(await evaluate("document.documentElement.scrollWidth"), width)
          assert.equal(await evaluate("document.querySelector('[data-theme]').dataset.theme"), theme)
          assert.equal(await evaluate("document.querySelector('[data-theme]').lang"), language)
          assert.equal(await evaluate("document.querySelectorAll('#architecture ol li').length"), 4)
          assert(await evaluate("[...document.querySelectorAll('aside a')].every(a => document.getElementById(a.hash.slice(1)))"))
          assert(await evaluate("[...document.querySelectorAll('#sources a')].every(a => a.pathname.includes('/blob/') && /^[a-f0-9]{40}$/.test(a.pathname.split('/')[4]))"))
          assert(await evaluate("document.querySelector('main a').search.includes('q=Angular')"))
          await evaluate("document.querySelectorAll('main img').forEach(img => img.loading = 'eager')")
          await until("[...document.querySelectorAll('main img')].every(img => img.complete && img.naturalWidth > 0)")
          await capture(`${slug}-${device}-${theme}`, true)
          if (slug === "smartparking") {
            assert.equal(await evaluate("document.querySelector('#gallery, #participation')"), null)
            continue
          }

          await evaluate("document.querySelector('#gallery a').focus()")
          assert(await evaluate("document.activeElement.matches('#gallery a:focus-visible')"))
          await key("Enter", "Enter", 13)
          await until("document.querySelector('dialog').open && document.querySelector('dialog img')?.naturalWidth === 1440")
          assert(await evaluate("document.activeElement === document.querySelector('dialog form button')"))
          await key("ArrowRight", "ArrowRight", 39)
          await until("document.querySelector('dialog figcaption')?.innerText.includes('2/3')")
          await until("document.querySelector('dialog img')?.complete")
          await capture(`galeria-${device}-${theme}`)
          await key("ArrowLeft", "ArrowLeft", 37)
          await until("document.querySelector('dialog figcaption')?.innerText.includes('1/3')")
          await key("Escape", "Escape", 27)
          await until("!document.querySelector('dialog').open")
          assert(await evaluate("document.activeElement === document.querySelector('#gallery a')"))
          if (mobile) await tap("#gallery li:nth-child(2) a")
          else await evaluate("document.querySelectorAll('#gallery a')[1].click()")
          await until("document.querySelector('dialog').open && document.querySelector('dialog figcaption')?.innerText.includes('2/3')")
          await evaluate("document.querySelector('dialog footer button:last-child').click()")
          await until("document.querySelector('dialog figcaption')?.innerText.includes('3/3')")
          await evaluate("document.querySelector('dialog form button').click()")
          await until("!document.querySelector('dialog').open")
          assert(await evaluate("document.activeElement === document.querySelectorAll('#gallery a')[1]"))
        }
      }
    }

    await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] })
    assert.equal(await evaluate("getComputedStyle(document.querySelector('main a')).transitionDuration"), "0s")
    await send("Emulation.setScriptExecutionDisabled", { value: true })
    await open(`${catalog}?lang=en&theme=light&q=SIGCOOP&specialty=cloud`, "Project catalog")
    assert.equal(await evaluate("document.querySelectorAll('article').length"), 1)
    await evaluate(`document.querySelector('article a[href*="/projects/sigcoop"]').click()`)
    await until("document.querySelector('h1')?.innerText === 'SIGCOOP'")
    await evaluate("document.querySelector('main a').click()")
    await until("document.querySelector('h1')?.innerText === 'Project catalog' && document.querySelector('[name=q]').value === 'SIGCOOP' && document.querySelector('[name=specialty]').value === 'cloud'")
    await open(`${catalog}/sigcoop?lang=es&theme=dark`, "SIGCOOP")
    assert(await evaluate("document.querySelector('#architecture p').innerText && document.querySelector('#sources a').href"))
    const original = await evaluate("document.querySelector('#gallery a').href")
    const image = await fetch(original)
    assert.equal(image.status, 200)
    assert.equal(image.headers.get("content-type"), "image/webp")
    await evaluate("document.querySelector('#gallery a').click()")
    await until(`location.href === ${JSON.stringify(original)}`)
    assert.deepEqual(exceptions, [])
    console.log("Verified both cases, responsive layouts, themes, locales, keyboard, gallery focus, and no-JavaScript image links.")
  } finally {
    socket?.close()
    chrome.kill()
  }
}

verify().catch(error => {
  console.error(error)
  process.exitCode = 1
})
