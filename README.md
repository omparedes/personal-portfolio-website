# Portafolio de Oscar Paredes

Portafolio bilingüe en React, Next.js App Router, TypeScript y Tailwind CSS. El catálogo enlaza los estudios de caso de SIGCOOP, SmartParking, PCMYM y MelodyCosmetics.

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

## Contacto

La versión 1.0 abre la aplicación de correo con el asunto `[PORTAFOLIO] Contacto desde mi sitio web`. Contacto permite copiar la dirección y Sobre mí ofrece solicitar el CV por correo.

Para una integración futura con Formspree Free, verificar el formulario y su destinatario antes de activarlo. Usar los campos nombre, correo de respuesta, motivo y mensaje, conservar el asunto etiquetado y habilitar reCAPTCHA. Probar en preview con datos de ejemplo, mantener los campos si falla el envío y anunciar los errores junto al campo correspondiente o en un estado accesible. Mostrar la confirmación solo después de una respuesta satisfactoria del proveedor. Revisar el aviso de privacidad antes de habilitar el formulario. [reCAPTCHA](https://help.formspree.io/articles/form-and-project-settings/recaptcha-settings/) · [Envíos y errores](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax)

## Publicación y recuperación

Vercel publica desde `main` en [portafolio-plum-xi-81.vercel.app](https://portafolio-plum-xi-81.vercel.app). La indexación requiere las variables de sistema de Vercel activas y el entorno de destino Production. El desarrollo local y los previews mantienen `noindex` y bloquean el rastreo en `robots.txt`.

Después del despliegue, ejecutar la auditoría HTTP con la compilación local de la misma revisión.

```sh
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/check-portfolio-production.ts https://portafolio-plum-xi-81.vercel.app --indexable
```

Ante una regresión grave, abrir el proyecto del portafolio en Vercel y promover el despliegue de producción inmediatamente anterior mediante [Instant Rollback](https://vercel.com/docs/instant-rollback). Verificar el dominio después de restaurarlo. Revertir el PR mediante un nuevo PR de GitHub si hay que recuperar también el código de `main` y conservar ambos estados en el historial. Verificar qué despliegue queda asignado antes de reanudar las publicaciones automáticas.
