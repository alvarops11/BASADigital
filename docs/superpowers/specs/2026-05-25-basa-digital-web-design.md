# Especificacion de rediseño visual web BASA Digital

Fecha: 2026-05-25

## Objetivo
Rediseñar por completo la web de BASA Digital para convertirla en una experiencia visual fuerte, coherente y hecha a medida. El sitio debe transmitir tecnologia, solvencia comercial y sensacion de sistema integrado, evitando por completo la apariencia de plantilla SaaS generica o de landing generada.

## Contexto confirmado
- BASA Digital es una marca/proyecto, no una empresa constituida.
- No se deben inventar CIF, NIF ni datos legales societarios.
- El stack actual sigue siendo React + Vite con React Router y Framer Motion.
- El rediseño no es iterativo ni cosmetico: se replantea direccion visual, composicion, fondos, cards, header, hero, secciones y animaciones.
- El criterio central aprobado es que toda la web se sienta como un unico sistema visual, no como piezas llamativas independientes.

## Assets reales detectados en `public`
### Logos
- `public/LOGO.png`
- `public/BASA DIGITAL/Logo.png`

### Videos
- `public/videoplayback.mp4`
- `public/BASA DIGITAL/video-fondo.mp4`
- `public/BASA DIGITAL/v2_f26cd464-0957-40a5-b8e0-04bc31a2014a.mp4`
- `public/BASA DIGITAL/video promocionañ.mp4`
- `public/BASA DIGITAL/VideoLogo-para fondo.mp4`

### Imagenes
- `public/BASA DIGITAL/foto fondo.jpg`
- `public/BASA DIGITAL/foto chatbot.jpg`
- `public/BASA DIGITAL/automatizacion.png`

## Decision de assets
- Asset visual dominante del hero: `public/BASA DIGITAL/video-fondo.mp4`
- Recursos secundarios a integrar en secciones internas:
  - `public/BASA DIGITAL/foto fondo.jpg`
  - `public/BASA DIGITAL/foto chatbot.jpg`
  - `public/BASA DIGITAL/automatizacion.png`
- Se evaluara en implementacion cual de las dos variantes de logo funciona mejor sobre fondos oscuros. No se limitara el diseño al `LOGO.png` actual si la otra version encaja mejor.

## Paleta obligatoria
### Principal
- Azul electrico: `#006BFF`
- Cian digital: `#00D4FF`
- Azul profundo: `#071B2F`
- Negro tecnologico: `#020B18`
- Blanco hielo: `#F4F8FF`

### Secundaria
- Gris azulado: `#5A6D8A`
- Azul acero: `#1E3A5F`
- Violeta tecnologico: `#7B61FF`
- Verde digital opcional: `#00E5C0`

## Direccion visual aprobada
### Concepto
Se adopta una direccion `hibrido marca + interfaz` con agresividad visual alta pero controlada.

Eso significa:
- hero tecnologico y escenografico
- paginas interiores con mucha identidad visual
- claridad comercial suficiente para que no parezca una pieza puramente experimental
- un lenguaje unico de materiales, color, iluminacion, bordes, trazos y movimiento

### Enfoque recomendado y aprobado
`Hibrido operativo`

La web debe sentirse como una marca que ya opera un sistema digital serio para comercios, no como una simple agencia ni como un dashboard abstracto.

## Sistema visual unificado
La coherencia de toda la web no vendra de repetir la misma tarjeta, sino de repetir la misma gramatica visual:

- fondo base casi negro en `#020B18`
- planos de profundidad en `#071B2F`
- lineas, grids, marcos y divisiones con opacidades controladas usando azul acero y cian
- focos y halos dirigidos en `#006BFF` y `#00D4FF`
- violeta `#7B61FF` solo para acentos interactivos o focos puntuales
- superficies con relieve tecnico, evitando glassmorphism blando o lavado
- radios, grosores de borde, sombras y brillos consistentes en todo el sitio
- una misma familia de animaciones para entrada, hover, scroll y fondos decorativos

## Principios visuales obligatorios
### Evitar
- glassmorphism exagerado
- blobs genericos
- degradados sin intencion
- tarjetas SaaS tipicas
- bloques planos muy blancos
- secciones repetidas sin personalidad propia
- mezcla de recursos que parezcan pegados sin sistema

### Buscar
- alto contraste
- composicion con capas
- tecnologia seria
- fondos oscuros con profundidad
- componentes con apariencia de sistema
- interfaz visualmente rica pero ordenada
- experiencia premium con unidad formal de principio a fin

## Hero
### Estructura
El hero se rediseñara por completo como escena principal del sitio.

Debe incluir:
- video `public/BASA DIGITAL/video-fondo.mp4` como fondo principal
- overlay oscuro elegante usando `#020B18` y `#071B2F`
- logo BASA Digital integrado en la escena, no solo colocado
- titular mas fuerte y visual
- subtitulo claro sobre soluciones digitales para comercios
- CTA principal: `Solicitar presupuesto`
- CTA secundario: `Ver soluciones`

### Composicion
El hero no sera texto sobre video. Debe incluir:
- bloque principal de copy
- uno o varios paneles flotantes
- chips o indicadores
- lineas de conexion o marcos
- metricas simuladas o microcomponentes de interfaz
- animaciones sutiles que hagan respirar la escena

### Sensacion
Debe transmitir que BASA Digital organiza, moderniza y automatiza la presencia digital del comercio.

## Header
### Requisitos
- flotante
- centrado
- compacto
- redondeado
- no ocupa todo el ancho
- integrado con el nuevo sistema visual
- animacion de entrada
- hover cuidado
- menu movil compacto y limpio

### Enlaces
- `Soluciones`
- `Nosotros`
- `Contacto`

### Tratamiento visual
Debe parecer una capsula tecnica premium:
- fondo oscuro translúcido muy controlado
- borde fino o marco interior
- halo o brillo sutil
- enlaces con foco visual coherente con la gramatica de lineas y acentos

## Home
La Home debe mantener estas secciones, pero rediseñadas por completo con composiciones distintas y coherentes entre si.

### 1. Hero
Escena principal con video, CTA y elementos UI flotantes.

### 2. Beneficios para comercios
No como lista plana. Deben presentarse como paneles o bloques tensos:
- Mas contactos
- Mejor imagen profesional
- Procesos mas simples
- Mas reservas
- Digitalizacion sin complicaciones

### 3. Tipos de comercios
Debe sentirse modular y rapido, no como una enumeracion sin forma:
- bares
- restaurantes
- tiendas
- peluquerias
- clinicas
- academias
- inmobiliarias
- gimnasios

### 4. Proceso de trabajo
Debe percibirse como flujo visual:
- Analizamos tu comercio
- Diseñamos la solucion
- La lanzamos
- La mejoramos

### 5. Soluciones destacadas
Version reducida y visualmente fuerte de algunas soluciones, enlazando a `/soluciones`.

### 6. CTA final
Cierre de conversion con identidad propia, no banner generico.

## Pagina `/soluciones`
### Objetivo
Presentar las soluciones como modulos de producto/servicio dentro del mismo sistema visual del sitio.

### Soluciones obligatorias
- Web profesional para restaurante
- Carta digital con QR
- Sistema de reservas online
- Landing page para campaña local
- Chatbot para atencion al cliente
- Automatizacion de formularios y leads
- Catalogo digital para tienda
- Web inmobiliaria con captacion de propietarios
- Sistema de pedidos o solicitudes online

### Cards
Las cards deben ser mucho mas trabajadas que una tarjeta tipica.

Deben incluir:
- iconografia o recurso grafico
- etiquetas visuales
- jerarquia clara
- hover animado
- bordes y sombras coherentes con la paleta
- boton `Consultar solucion`

### Composicion
La pagina no debe ser solo una cuadrícula uniforme. Puede haber:
- encabezado fuerte
- cards con distinta densidad
- fondos tecnicos compartidos
- pequeñas variaciones de ritmo sin romper coherencia

## Pagina `/nosotros`
### Objetivo
Humanizar la marca sin abandonar el sistema visual tecnico.

### Cartas obligatorias
- `Alvaro Perez`
- `Alfonso Ruiz`

### Cada carta debe incluir
- hueco para foto
- nombre
- descripcion breve
- enlace a LinkedIn
- tratamiento premium

### LinkedIn
- Alvaro: `#linkedin-alvaro`
- Alfonso: `#linkedin-alfonso`

### Estilo
No deben parecer cards simples de equipo. Deben sentirse como perfiles dentro del ecosistema visual de marca.

## Pagina `/contacto`
### Estructura
Formulario principal mas bloque lateral de apoyo.

### Campos obligatorios
- Nombre
- Email
- Telefono
- Tipo de comercio
- Servicio que le interesa
- Mensaje

### Requisitos funcionales
- validacion frontend
- estados de error
- estado de envio simulado si no hay backend

### Requisitos visuales
- diseño cuidado
- layout profesional
- no parecer formulario generico
- bloque lateral con ventajas, razones para escribir o informacion de contacto

## Pagina `/legal`
### Requisito principal
Mantener la pagina, pero adaptada a que BASA Digital es marca/proyecto, no empresa constituida.

### No incluir
- CIF
- NIF
- datos societarios inventados

### Placeholders obligatorios
- Responsable del sitio: `[NOMBRE DE LA PERSONA RESPONSABLE]`
- Marca/proyecto: `BASA Digital`
- Email de contacto: `[EMAIL DE CONTACTO]`
- Ubicacion: `[CIUDAD/PAIS]`
- Actividad: `servicios digitales para comercios`

## Footer
Debe rediseñarse para que no parezca un pie generico.

### Contenido
- BASA Digital
- breve descripcion
- enlaces a Soluciones, Nosotros, Contacto y Legal
- copyright 2026

### Estilo
Debe sentirse como panel de cierre del sistema visual del sitio.

## Animaciones
### Herramienta
Usar Framer Motion, ya disponible en el proyecto.

### Tipos de animacion
- animaciones por scroll
- stagger en cards
- hero con elementos flotantes
- transiciones suaves
- hover avanzado
- microinteracciones en botones
- aparicion del header
- movimiento sutil en fondos, lineas o halos
- respeto a `prefers-reduced-motion`

### Criterio
La animacion debe reforzar el sistema visual, no distraer ni saturar.

## Responsive
### Movil
- header usable
- hero simplificado sin saturacion
- cards a una columna
- botones comodos
- formulario claro
- ningun corte o desborde

### Tablet
- reorganizacion limpia del hero y de las cards
- mantenimiento de la jerarquia visual

### Escritorio
- maxima expresividad visual
- lectura clara
- buen uso del espacio negativo y de las capas

## Decisiones tecnicas
- Mantener la arquitectura SPA y los modulos de datos ya existentes.
- El rediseño puede reestructurar componentes actuales si mejora claridad y coherencia.
- Deben reutilizarse los assets reales de `public` para evitar una estetica generica.
- No introducir nuevas dependencias salvo necesidad real.

## Riesgos
- El uso intensivo de video y decoracion puede penalizar rendimiento si no se controla bien.
- Un rediseño muy cargado puede perder legibilidad en movil si no se simplifica por breakpoint.
- Integrar muchos assets sin reglas claras puede romper la unidad visual, por eso el sistema visual unificado es un requisito de primer nivel.

## Criterios de aceptacion
- La web parece una sola pieza visual y no una suma de secciones.
- La nueva paleta domina claramente la experiencia.
- Los assets reales de `public` se aprovechan de forma intencional.
- El hero tiene impacto visual alto y composicion compleja pero legible.
- Las paginas interiores conservan identidad fuerte sin perder uso comercial.
- El formulario y la pagina legal siguen siendo funcionales y coherentes con el nuevo sistema.

## Pruebas previstas
- `npm test`
- `npm run build`
- revision visual manual en movil, tablet y escritorio
- comprobacion de navegacion
- comprobacion del formulario
- comprobacion de `prefers-reduced-motion`
- comprobacion de integracion visual entre Home y paginas interiores
