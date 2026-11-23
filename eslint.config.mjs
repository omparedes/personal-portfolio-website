import next from "@next/eslint-plugin-next"
import { defineConfig, globalIgnores } from "eslint/config"
import reactHooks from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores([".next/", "out/", "build/", "next-env.d.ts"]),
  {
    files: ["**/*.{js,mjs,jsx,ts,tsx}"],
    extends: [next.configs["core-web-vitals"]],
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommended],
  },
])
