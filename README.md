# Portafolio de Oscar Paredes

Portafolio bilingüe en React, Next.js App Router, TypeScript y Tailwind CSS. Durante la revisión, las páginas conservan los controles de indexación y Contacto ofrece correo directo y GitHub.

## Desarrollo y verificación

Usa Node.js 24.19.0 y npm 11.17.0. Desde la raíz, instala con `npm ci` y ejecuta:

```sh
npm run content:check
npm run contact:check
npm run lint
npm run build
npm run typecheck
npm start -- --hostname 127.0.0.1 --port 3218
```

La compilación usa Webpack. Tras iniciar el servidor local, la auditoría de producción comprueba rutas, metadatos, HTML/RSC, contacto y recursos estáticos:

```sh
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/check-portfolio-production.ts
```

Para desarrollo, usa `npm run dev`. La galería se comprueba con Chrome y `node scripts/check-case-gallery.cjs`. Configura `PORTFOLIO_DEV_URL` si el servidor usa otro puerto. Las fuentes locales incluyen sus licencias OFL.

La proyección aprobada se versiona con la aplicación. [Guía de contenido](content/README.md)

## Revisión local de los CV

Las copias propuestas para distribución se guardan fuera del repositorio y no contienen número de teléfono. Su distribución requiere autorización independiente.

Para la revisión local, establece `PORTFOLIO_CV_REVIEW_DIR` con la ruta absoluta de las copias verificadas y ejecuta `npm run dev -- --webpack --hostname 127.0.0.1 --port 3218`. Abre `http://127.0.0.1:3218/about`. Cada enlace solo se muestra cuando la copia coincide con la huella aprobada. El acceso a los PDF está desactivado en Vercel y en el servidor de producción, incluso si la variable de revisión está definida.

## Revisión local de proyectos

En la compilación local, el catálogo enlaza los estudios de caso bilingües de SIGCOOP, SmartParking y PCMYM. El portafolio conserva `noindex` durante la revisión.
