# Cambios BASA Digital Web

Fecha: 2026-05-25

## Resumen
- Se rehace por completo la direccion visual de la web de BASA Digital.
- La experiencia pasa a un sistema visual oscuro, tecnico y comercial usando la paleta aprobada.
- Se integran assets reales de `public/BASA DIGITAL` para evitar una estetica generica.
- La seccion bajo el hero deja de usar `videoplayback.mp4` y pasa a una composicion texto + escena 3D con Spline.
- La pagina `/soluciones` abandona la rejilla antigua y pasa a una lista vertical de experiencias 3D, una solucion por fila.
- Se aplica una optimizacion estructural para reducir bloqueos de carga: rutas lazy, Spline diferido por visibilidad, video secundario diferido y menos trabajo duplicado en desarrollo.

## Archivos y modulos tocados
- `src/components`: header, hero, footer, cards, intro, CTA, formulario y showcases interactivos redisenados.
- `src/data`: soluciones y equipo ampliados con metadatos visuales; ahora incluye un bloque especifico para soluciones 3D de `/soluciones`.
- `src/pages`: Home, Soluciones, Nosotros, Contacto y Legal recompuestas.
- `src/styles`: nuevo sistema global, componentes y layouts de pagina.
- `src/test`: tests actualizados para reflejar el nuevo contrato visual y funcional.
- `package.json`: nueva dependencia `@splinetool/react-spline` para escenas interactivas.

## Logica nueva
- Hero reconstruido con `public/BASA DIGITAL/video-fondo.mp4`, overlays oscuros y paneles flotantes.
- Home reorganizada en secciones con composicion propia pero lenguaje visual unico.
- El bloque `Experiencia digital` cambia de scrub de video a un showcase de dos columnas con mensaje comercial y escena Spline.
- El bloque derecho del hero deja de apoyarse en posiciones absolutas caoticas y pasa a una rejilla interna mas ordenada para mejorar jerarquia y lectura.
- Ese bloque del hero se reequilibra despues para dar mas ancho util a los modulos inferiores y evitar cortes torpes de titulares y etiquetas.
- El panel derecho del hero se simplifica otra vez para evitar cajas descompensadas y mejorar la lectura real de las piezas.
- Se elimina `Flujo operativo` del hero para dejar una composicion 2x2 mas estable, sin huecos ni tarjetas sobrantes.
- Se ajusta de nuevo la distribucion del panel derecho: las dos piezas con imagen pasan a filas completas para evitar cortes de texto y errores de espacio.
- La tarjeta de la escena interactiva incluye un `footer` decorativo propio para permitir capas visuales adicionales sin tocar el recurso embebido.
- Ese `footer` decorativo usa un degradado casi opaco y un borde tecnico suave para comportarse como una pieza de interfaz real bajo la escena 3D.
- El footer de esa tarjeta muestra la etiqueta `Tecnologia 3D` para reforzar la lectura del bloque como modulo visual propio.
- `/soluciones` elimina todas las tarjetas anteriores y pasa a un formato nuevo con tarjetas Spline a una columna.
- La primera solucion nueva es `Un ChatBOT con IA que responde a tus clientes por ti`, usando la escena `https://prod.spline.design/NBUruauj2L3toHhz/scene.splinecode`.
- Se anade una segunda tarjeta Spline en `/soluciones` para `Creacion de Paginas Web para captar mas clientes`, usando `https://prod.spline.design/7uuTIe70EMmgApal/scene.splinecode`.
- Las escenas Spline ya no se importan al montar la pagina: solo se activan cuando el bloque entra en viewport.
- El video secundario de Home deja de descargarse y reproducirse desde el inicio; ahora se carga cuando se acerca a pantalla.
- El video principal del hero vuelve a priorizar carga y añade una reanudacion defensiva para evitar pausas o cortes al volver al tab o bajo carga.
- Se reduce el postprocesado del video de fondo del hero para aliviar carga de render y mejorar continuidad del bucle.
- Las paginas del router se cargan por ruta con `React.lazy`, reduciendo el JS inicial.
- Se elimina `StrictMode` del arranque para evitar doble montaje en desarrollo sobre escenas y media pesados.
- Nosotros cambia a perfiles premium con hueco visual para foto y foco mixto tecnico/comercial.
- Contacto mantiene validacion frontend y envio simulado dentro de un layout mas editorial y tecnico.
- Nosotros actualiza los perfiles de Alfonso Ruiz y Alvaro Perez con foto real y foco tecnico detallado en IA, desarrollo y ciberseguridad.
- Las fotos del equipo pasan a `src/assets/autores` y se consumen por import en `src/data/team.js` para que Vite resuelva rutas de forma determinista en dev y build.
- Se sustituyen placeholders de LinkedIn por URLs reales de Alfonso Ruiz Bataller y Alvaro Perez Salvador en la seccion Nosotros.
- Los enlaces de LinkedIn en tarjetas de Nosotros ahora abren en nueva pestaña para no interrumpir la navegacion de la web.
- Se corrige el layout de Contacto: formulario recompuesto con grid estable, estados visibles y contenedor estirado para igualar altura con la tarjeta lateral izquierda.
- Se anade un boton flotante global de WhatsApp, visible durante toda la navegacion, con acceso directo al numero `663300680` y mensaje precargado de solicitud comercial.
- Se anade un segundo boton flotante de ayuda (icono `?`) sobre WhatsApp, que abre un chat simulado con fondo blanco y estructura lista para conectar una llamada real a OpenRouter en el futuro.
- Se actualiza el favicon del sitio para usar el logo real de BASA Digital (`/LOGO.png`) en la pestana del navegador.
- Se reemplaza el favicon por una version nueva (`/Favicon.png`) para mejorar legibilidad y presencia de marca en pestana.
- Se corrige proporción del favicon: se genera versión cuadrada centrada (`/favicon-512.png`) para evitar icono pequeño o deformado en pestaña.
- Se implementa chat real para el boton flotante usando endpoint seguro `api/chat.js` (Vercel Serverless Function) para OpenRouter.
- La API key deja de estar en frontend: ahora solo vive en variables de entorno de servidor (`OPENROUTER_API_KEY`).
- Se añade `.env.example` con las variables necesarias para despliegue en Vercel (`OPENROUTER_API_KEY`, `OPENROUTER_MODEL`, `OPENROUTER_SITE_URL`).
- El asistente de chat ajusta su prompt comercial: resuelve dudas y deriva hacia Contacto o WhatsApp, evita respuestas de "no se puede" y define a BASA Digital como proyecto de digitalizacion de negocios.
- Se cambia el modelo por defecto a una opcion `free` de OpenRouter (`meta-llama/llama-3.1-8b-instruct:free`), configurable por entorno.
- Se añade middleware local en `vite.config.js` para exponer `/api/chat` durante `vite dev` y evitar `404` en desarrollo, manteniendo la API key en servidor.
- Legal se adapta a BASA Digital como marca/proyecto y deja placeholders sin inventar datos societarios.

## Decisiones tecnicas
- Se mantiene React Router y Framer Motion como base de navegacion y motion.
- La coherencia se resuelve con una sola gramatica visual: fondos oscuros, lineas, brillos y acentos controlados.
- Se prioriza reutilizacion de componentes y datos para que el rediseño siga siendo mantenible.
- La escena 3D se monta con `@splinetool/react-spline` para Vite en lugar del import `/next`, que solo encaja en proyectos Next.js.
- La nueva pagina de soluciones usa un componente reutilizable `SplineSolutionCard` para poder añadir nuevas escenas una a una sin rehacer layout ni estilos.
- Se introducen `DeferredSpline` y `DeferredVideo` para retrasar coste de red y render hasta que el contenido es relevante.
- La activacion de Spline se retrasa aun mas para que no compita con la estabilidad del hero durante el primer render.
- `DeferredSpline` ahora desmonta escenas fuera de viewport y las vuelve a montar al entrar, para reducir carga acumulada cuando hay varios bloques 3D en la pagina.
- Se corrige estrategia de Spline para evitar ciclos repetidos de montaje/desmontaje por scroll: cada escena se monta una vez al entrar en viewport y se mantiene hasta abandonar la pagina.
- Se corrige posible fuga por `requestAnimationFrame` en `AnimatedCounter` con cancelacion explicita en unmount y guardas de componente montado.
- Se simplifica `TeamCard`: elimina fallback dinamico de rutas y renderiza la URL importada para evitar fallos de carga intermitentes.
- El grid de Nosotros fuerza altura uniforme en tarjetas de equipo para mantener la misma presencia visual entre Alfonso y Alvaro.

## Riesgos o limitaciones
- El hero depende de video de fondo y conviene revisar su rendimiento final en despliegue real.
- Las escenas Spline dependen de recursos remotos y su carga real conviene validarla en navegador y red de produccion.
- Aunque el JS inicial baja, las escenas Spline siguen generando chunks grandes y conviene limitar cuantas se muestran arriba del primer pliegue.
- La pagina legal sigue necesitando completar placeholders reales.
- El formulario no conecta aun con backend.

## Como probarlo
- Ejecutar `npm test`.
- Ejecutar `npm run build`.
- Levantar `npm run dev` y revisar:
  - hero y header en escritorio y movil,
  - nueva seccion `Experiencia digital` y carga de la escena 3D,
  - nueva pagina `/soluciones` con lista vertical y escena del chatbot,
  - comportamiento del menu movil,
  - densidad visual de cards y fondos,
  - validacion del formulario,
  - coherencia general entre Home y paginas interiores.
