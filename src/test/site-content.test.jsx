import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

test('la home muestra el nuevo hero tecnologico y contacto mantiene el formulario', async () => {
  const home = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )

  expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(
    /soluciones\s*digitales\s*para\s*comercios\s*que\s*necesitan\s*moverse\s*mas\s*rapido/i,
  )
  expect(screen.getByText(/panel de control comercial/i)).toBeInTheDocument()
  expect(screen.getByText(/proceso conectado/i)).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /solicitar presupuesto/i }).length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByRole('link', { name: /ver soluciones/i }).length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByText(/cartas qr/i).length).toBeGreaterThanOrEqual(1)
  expect(screen.getByRole('heading', { name: /una presencia digital pensada para captar, explicar y convertir/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /modulos concretos para problemas comerciales concretos/i })).toBeInTheDocument()

  home.unmount()

  const contact = render(
    <MemoryRouter initialEntries={['/contacto']}>
      <App />
    </MemoryRouter>,
  )

  expect(await screen.findByRole('heading', { name: /solicita un diagnostico digital gratuito/i })).toBeInTheDocument()
  expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /solicitar diagnostico/i })).toBeInTheDocument()

  contact.unmount()

  render(
    <MemoryRouter initialEntries={['/soluciones']}>
      <App />
    </MemoryRouter>,
  )

  expect(
    await screen.findByRole('heading', {
      name: /soluciones digitales para comercios que quieren captar y operar mejor/i,
    }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', {
      name: /un chatbot con ia que responde a tus clientes por ti/i,
    }),
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /webs, reservas, cartas qr y automatizaciones en un solo sitio/i })).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /consultar solucion/i }).length).toBeGreaterThanOrEqual(2)
  const splineScenes = await screen.findAllByTestId('mock-spline-scene')
  expect(
    splineScenes.some(
      (node) => node.getAttribute('data-scene') === 'https://prod.spline.design/NBUruauj2L3toHhz/scene.splinecode',
    ),
  ).toBe(true)
})
