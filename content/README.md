# Datos aprobados para el portafolio

La aplicación lee `projection.generated.ts`. El módulo reúne un registro por hecho con ID estable, datos estructurados y texto ES/EN. Los enlaces y rutas de archivos públicos de los estudios de caso aparecen por ID de hecho. El registro editorial completo y las aprobaciones se gestionan en la fuente privada.

Para introducir un nuevo hecho, registra allí su respaldo y permiso, revisa ambas traducciones y regenera la proyección. Las tarjetas, los filtros, los casos y SEO reutilizan esa misma salida. Para un CV o perfil externo, usa los mismos identificadores y adapta extensión y formato sin cambiar el hecho. Con el proyecto instalado, ejecuta `npm run content:check` y `npm run content:preview -- es` o `-- en`.
