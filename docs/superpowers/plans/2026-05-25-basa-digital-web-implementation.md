# BASA Digital Web Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una web multipagina completa para BASA Digital con React + Vite, routing, animacion cuidada, formulario validado y documentacion actualizada.

**Architecture:** Se montara una SPA con React Router, layout compartido y componentes reutilizables para hero, cards, CTA y formulario. Los datos de soluciones y equipo vivirán en modulos separados para mantener el contenido desacoplado de la presentacion, y la animacion se centralizara con wrappers simples sobre Framer Motion respetando `prefers-reduced-motion`.

**Tech Stack:** React, Vite, React Router DOM, Framer Motion, CSS modular por secciones con estilos globales, Vitest, Testing Library.

---

## File Structure

- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\package.json`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\vite.config.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\vitest.config.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\index.html`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\main.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\App.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\global.css`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\components.css`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\pages.css`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\solutions.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\team.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Header.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Footer.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Hero.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SectionTitle.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SolutionCard.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\TeamCard.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\ContactForm.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\CTASection.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Reveal.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\PageIntro.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\HomePage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\SolutionsPage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\AboutPage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\ContactPage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\LegalPage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\app.test.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\contact-form.test.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\docs\cambios-basa-digital-web.md`

### Task 1: Scaffold base and dependencies

**Files:**
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\package.json`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\vite.config.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\vitest.config.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\index.html`

- [ ] **Step 1: Crear el proyecto base con Vite React**

```bash
npm create vite@latest . -- --template react
```

- [ ] **Step 2: Instalar dependencias de runtime y test**

```bash
npm install react-router-dom framer-motion
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

- [ ] **Step 3: Ajustar scripts y configuracion de test**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

```js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js'
  }
});
```

- [ ] **Step 4: Verificar que Vite arranca y el arbol base existe**

Run: `npm run build`
Expected: salida de build correcta de Vite sin errores fatales.

### Task 2: Router and app shell via TDD

**Files:**
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\app.test.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\main.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\App.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Header.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Footer.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\HomePage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\SolutionsPage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\AboutPage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\ContactPage.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\LegalPage.jsx`

- [ ] **Step 1: Escribir el test de rutas y footer global**

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renderiza header, footer y enlaces principales', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('link', { name: /soluciones/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /nosotros/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /informacion legal/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Ejecutar el test y verificar rojo**

Run: `npm test -- src/test/app.test.jsx`
Expected: FAIL porque `App` y las rutas todavia no existen o no cumplen el contrato.

- [ ] **Step 3: Implementar shell minima con Router y layout comun**

```jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/soluciones" element={<SolutionsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 4: Ejecutar el test y verificar verde**

Run: `npm test -- src/test/app.test.jsx`
Expected: PASS.

### Task 3: Content modules and page composition

**Files:**
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\solutions.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\data\team.js`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Hero.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SectionTitle.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\SolutionCard.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\TeamCard.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\CTASection.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\PageIntro.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\*.jsx`

- [ ] **Step 1: Componer el contenido desde arrays y componentes reutilizables**

```js
export const solutions = [
  {
    title: 'Web profesional para restaurante',
    description: 'Una web clara para mostrar carta, reservas y ubicacion.',
    problem: 'Muchos clientes no encuentran informacion util a tiempo.',
    benefit: 'Convierte visitas en reservas o llamadas con menos friccion.',
    tags: ['Web corporativa', 'Reservas', 'SEO local']
  }
];
```

- [ ] **Step 2: Implementar Home, Soluciones y Nosotros con esos datos**

```jsx
{solutions.map((solution) => (
  <SolutionCard key={solution.title} solution={solution} />
))}
```

- [ ] **Step 3: Verificar render manual y build**

Run: `npm run build`
Expected: build correcta con las rutas y componentes creados.

### Task 4: Contact form via TDD

**Files:**
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\test\contact-form.test.jsx`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\ContactForm.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\pages\ContactPage.jsx`

- [ ] **Step 1: Escribir test de validacion basica y envio simulado**

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../components/ContactForm';

test('muestra errores requeridos y confirma envio simulado', async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.click(screen.getByRole('button', { name: /enviar/i }));
  expect(screen.getByText(/introduce tu nombre/i)).toBeInTheDocument();

  await user.type(screen.getByLabelText(/nombre/i), 'Ana');
  await user.type(screen.getByLabelText(/^email/i), 'ana@basa.es');
  await user.type(screen.getByLabelText(/telefono/i), '600123123');
  await user.selectOptions(screen.getByLabelText(/tipo de comercio/i), 'Restaurante');
  await user.selectOptions(screen.getByLabelText(/servicio que le interesa/i), 'Carta digital con QR');
  await user.type(screen.getByLabelText(/mensaje/i), 'Necesito renovar la presencia digital del local');
  await user.click(screen.getByRole('button', { name: /enviar/i }));

  expect(await screen.findByText(/hemos recibido tu solicitud/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Ejecutar el test y verificar rojo**

Run: `npm test -- src/test/contact-form.test.jsx`
Expected: FAIL porque el formulario aun no valida ni simula envio.

- [ ] **Step 3: Implementar el formulario minimo para pasar el test**

```jsx
const initialState = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  interest: '',
  message: ''
};
```

- [ ] **Step 4: Ejecutar el test y verificar verde**

Run: `npm test -- src/test/contact-form.test.jsx`
Expected: PASS.

### Task 5: Visual system, motion and responsive polish

**Files:**
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\global.css`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\components.css`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\styles\pages.css`
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Reveal.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Header.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\Hero.jsx`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\src\components\*.jsx`

- [ ] **Step 1: Definir tokens, tipografia y layouts base**

```css
:root {
  --bg: #f4f1ea;
  --surface: rgba(255, 255, 255, 0.78);
  --surface-strong: #fffaf2;
  --text: #151515;
  --muted: #5c5a57;
  --accent: #bd7b31;
  --accent-strong: #8b4c16;
  --line: rgba(21, 21, 21, 0.1);
  --shadow: 0 24px 60px rgba(21, 21, 21, 0.12);
}
```

- [ ] **Step 2: Aplicar hero con video, header flotante y animacion controlada**

```jsx
<video autoPlay muted loop playsInline className="hero-video">
  <source src="/videoplayback.mp4" type="video/mp4" />
</video>
```

- [ ] **Step 3: Verificar desktop, movil y reduced motion en navegador**

Run: `npm run dev`
Expected: aplicacion visible en navegador con hero en video, header compacto y cards responsivas.

### Task 6: Documentation and final verification

**Files:**
- Create: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\docs\cambios-basa-digital-web.md`
- Modify: `C:\Users\alvar\Desktop\Proyectos\BASA Digital\docs\superpowers\specs\2026-05-25-basa-digital-web-design.md`

- [ ] **Step 1: Documentar el cambio en docs**

```md
# Cambios BASA Digital Web

Fecha: 2026-05-25

## Resumen
- Se crea la web comercial completa en React + Vite.
- Se reutilizan `public/LOGO.png` y `public/videoplayback.mp4`.
- Se añaden paginas Home, Soluciones, Nosotros, Contacto y Legal.
```

- [ ] **Step 2: Ejecutar bateria final de verificacion**

Run: `npm test && npm run build`
Expected: tests y build en verde.

- [ ] **Step 3: Verificacion visual manual en navegador**

Run: `npm run dev`
Expected: navegacion funcional, formulario usable, footer global y hero con video correcto.

## Self-review
- Cobertura de spec: Home, Soluciones, Nosotros, Contacto, Legal, header, footer, hero con video, animacion, responsive, documentacion y pruebas quedan cubiertos.
- Placeholders: solo permanecen los legales requeridos (`[EMAIL DE CONTACTO]`).
- Consistencia: el plan usa React Router, Framer Motion y arrays de datos de forma coherente en todas las tareas.
