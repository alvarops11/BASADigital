# BASA Digital Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rehacer la web de BASA Digital con una nueva direccion visual tecnologica unificada, usando la paleta aprobada y los assets reales disponibles en `public`.

**Architecture:** Se mantendra la SPA actual con React Router, pero se reestructuraran los componentes visuales para que compartan un unico sistema de estilos, fondos, capas decorativas y animaciones. El rediseño se apoyara en datos modulares para soluciones y equipo, wrappers de motion reutilizables, y una jerarquia de layout mas rica para Home y paginas interiores.

**Tech Stack:** React, Vite, React Router DOM, Framer Motion, CSS por capas (`global.css`, `components.css`, `pages.css`), Vitest, Testing Library.

---

## File Structure

- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\app.test.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\site-content.test.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\contact-form.test.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\solutions.js`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\team.js`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Header.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Footer.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Hero.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Reveal.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SectionTitle.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SolutionCard.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\TeamCard.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\CTASection.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\PageIntro.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\ContactForm.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\HomePage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\SolutionsPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\AboutPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\ContactPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\LegalPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\global.css`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\components.css`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\pages.css`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\docs\cambios-basa-digital-web.md`

### Task 1: Lock the redesign contract with tests

**Files:**
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\app.test.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\site-content.test.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\contact-form.test.jsx`

- [ ] **Step 1: Write failing expectations for the new visual/content contract**

```jsx
expect(
  screen.getByRole('heading', {
    name: /soluciones digitales para comercios que necesitan moverse mas rapido/i,
  }),
).toBeInTheDocument()

expect(screen.getByText(/panel de control comercial/i)).toBeInTheDocument()
expect(screen.getByText(/proceso conectado/i)).toBeInTheDocument()
expect(screen.getByRole('heading', { name: /un sistema visual hecho para vender mejor/i })).toBeInTheDocument()
```

- [ ] **Step 2: Run tests to verify red**

Run: `npm.cmd test -- src/test/site-content.test.jsx`
Expected: FAIL porque el hero, la home y las paginas interiores aun responden al diseño anterior.

- [ ] **Step 3: Update the route-shell expectations to the final IA-free navigation contract**

```jsx
expect(screen.getByRole('link', { name: /informacion legal/i })).toBeInTheDocument()
expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
```

- [ ] **Step 4: Run the focused route shell test**

Run: `npm.cmd test -- src/test/app.test.jsx`
Expected: PASS o FAIL controlado solo por diferencias del nuevo shell.

### Task 2: Rebuild data modules and shared components for the new visual system

**Files:**
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\solutions.js`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\team.js`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Reveal.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SectionTitle.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\PageIntro.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\CTASection.jsx`

- [ ] **Step 1: Extend the solutions data with visual metadata**

```js
{
  title: 'Web profesional para restaurante',
  eyebrow: 'Captacion local',
  description: 'Web pensada para reservas, carta, ubicacion y confianza.',
  problem: 'El cliente no encuentra informacion clave cuando ya quiere decidir.',
  benefit: 'Convierte visitas en reservas, llamadas o mensajes con menos friccion.',
  tags: ['Web', 'Reservas', 'SEO local'],
  accent: 'cyan',
  metric: '24/7',
}
```

- [ ] **Step 2: Extend team data with premium-profile fields**

```js
{
  name: 'Alvaro Perez',
  role: 'Desarrollo web y automatizacion',
  summary: 'Construye sistemas digitales claros para negocios que quieren vender mejor.',
  highlights: ['Implantacion tecnica', 'Web a medida', 'Automatizacion comercial'],
  linkedin: '#linkedin-alvaro',
}
```

- [ ] **Step 3: Refactor the shared wrappers to support denser visual composition**

```jsx
export default function SectionTitle({ eyebrow, title, description, align = 'left', tone = 'default' }) {
  return (
    <div className={`section-title section-title--${align} section-title--${tone}`}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-title__description">{description}</p> : null}
    </div>
  )
}
```

- [ ] **Step 4: Run the full test suite to ensure shared refactors did not break rendering**

Run: `npm.cmd test`
Expected: FAIL solo por componentes visuales o copy todavia sin actualizar.

### Task 3: Rebuild the header and hero as the main visual signature

**Files:**
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Header.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Hero.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\components.css`

- [ ] **Step 1: Implement the floating centered header with a stronger shell**

```jsx
<motion.header className="site-header" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}>
  <nav className="site-nav shell" aria-label="Principal">
    <Link to="/" className="site-nav__brand">
      <img src="/BASA DIGITAL/Logo.png" alt="BASA Digital" />
    </Link>
    <div className={`site-nav__links${isOpen ? ' is-open' : ''}`}>
      ...
    </div>
  </nav>
</motion.header>
```

- [ ] **Step 2: Run the route shell test**

Run: `npm.cmd test -- src/test/app.test.jsx`
Expected: PASS o fallo localizado en textos/copys del hero, no en el header.

- [ ] **Step 3: Replace the hero with the approved hybrid-operational scene**

```jsx
<video autoPlay muted loop playsInline className="hero__video">
  <source src="/BASA DIGITAL/video-fondo.mp4" type="video/mp4" />
</video>

<h1>Soluciones digitales para comercios que necesitan moverse mas rapido</h1>
<p>Web, reservas, automatizacion y presencia digital con una estetica clara, moderna y comercial.</p>
<div className="hero__floating-panels">...</div>
```

- [ ] **Step 4: Run the hero integration test**

Run: `npm.cmd test -- src/test/site-content.test.jsx`
Expected: PASS parcial o fallo solo por paginas interiores que aun no se han rehecho.

### Task 4: Redesign Home, Solutions and About around one visual grammar

**Files:**
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SolutionCard.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\TeamCard.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\HomePage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\SolutionsPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\AboutPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\pages.css`

- [ ] **Step 1: Recompose the Home page into visually distinct but integrated sections**

```jsx
const benefitPanels = [
  { label: 'Mas contactos', value: '01', text: '...' },
  { label: 'Procesos mas simples', value: '02', text: '...' },
]

<section className="home-command-grid">...</section>
<section className="home-commerce-matrix">...</section>
<section className="home-process-ribbon">...</section>
```

- [ ] **Step 2: Rebuild solution cards with icon zones, metrics and stronger hover states**

```jsx
<article className={`solution-card solution-card--${solution.accent}`}>
  <div className="solution-card__signal">{solution.metric}</div>
  <p className="solution-card__eyebrow">{solution.eyebrow}</p>
  <h3>{solution.title}</h3>
  ...
</article>
```

- [ ] **Step 3: Rebuild the About cards as premium profiles**

```jsx
<article className="team-card">
  <div className="team-card__photo-slot" aria-hidden="true" />
  <div className="team-card__body">...</div>
</article>
```

- [ ] **Step 4: Run the content integration test again**

Run: `npm.cmd test -- src/test/site-content.test.jsx`
Expected: PASS para home y estructura principal.

### Task 5: Redesign Contact, Legal and Footer without breaking behavior

**Files:**
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\ContactForm.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Footer.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\ContactPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\LegalPage.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\components.css`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\pages.css`

- [ ] **Step 1: Keep the existing ContactForm validation contract but move it into a richer shell**

```jsx
<section className="contact-page__layout">
  <aside className="contact-page__panel">...</aside>
  <ContactForm />
</section>
```

- [ ] **Step 2: Run the contact form test to verify no regression**

Run: `npm.cmd test -- src/test/contact-form.test.jsx`
Expected: PASS.

- [ ] **Step 3: Adapt legal copy to placeholders for a brand/project and redesign the footer**

```jsx
<p>Responsable del sitio: [NOMBRE DE LA PERSONA RESPONSABLE]</p>
<p>Marca/proyecto: BASA Digital</p>
<p>Email de contacto: [EMAIL DE CONTACTO]</p>
<p>Ubicacion: [CIUDAD/PAIS]</p>
<p>Actividad: servicios digitales para comercios</p>
```

- [ ] **Step 4: Run the full test suite**

Run: `npm.cmd test`
Expected: PASS.

### Task 6: Replace the visual system styles and verify production build

**Files:**
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\global.css`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\components.css`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\pages.css`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\docs\cambios-basa-digital-web.md`

- [ ] **Step 1: Replace the warm-light palette tokens with the approved dark technical system**

```css
:root {
  --bg-0: #020b18;
  --bg-1: #071b2f;
  --surface-0: rgba(7, 27, 47, 0.78);
  --surface-1: rgba(10, 34, 58, 0.92);
  --line: rgba(0, 212, 255, 0.18);
  --text: #f4f8ff;
  --muted: #5a6d8a;
  --blue: #006bff;
  --cyan: #00d4ff;
  --violet: #7b61ff;
}
```

- [ ] **Step 2: Implement section-specific layouts, glows, grids and responsive adjustments**

```css
.site-shell::before { ... }
.hero::after { ... }
.solution-card:hover { ... }
@media (max-width: 820px) { ... }
```

- [ ] **Step 3: Document the redesign in project docs**

```md
## Rediseño visual 2026-05-25
- Nueva paleta oscura y tecnica
- Hero rehecho con `public/BASA DIGITAL/video-fondo.mp4`
- Integracion de imagenes y recursos visuales secundarios
```

- [ ] **Step 4: Run the full verification battery**

Run: `npm.cmd test`
Expected: `3 passed`

Run: `npm.cmd run build`
Expected: `✓ built` sin errores fatales.

## Self-review
- Cobertura de spec: hero, header, home, soluciones, nosotros, contacto, legal, footer, animaciones, responsive y uso de assets reales quedan cubiertos.
- Placeholders: solo permanecen los legales exigidos por la spec.
- Consistencia: el plan mantiene un unico sistema visual, reutiliza datos y no introduce dependencias nuevas.
