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
    /tecnologia\s*que\s*impulsa\s*tu\s*negocio/i,
  )
  expect(screen.getByText(/automatizacion, ia y software b2b/i)).toBeInTheDocument()
  expect(screen.getByText(/basa automation os/i)).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /solicitar diagnostico/i }).length).toBeGreaterThanOrEqual(1)
  expect(screen.getAllByRole('link', { name: /ver soluciones/i }).length).toBeGreaterThanOrEqual(1)
  expect(screen.getByRole('heading', { name: /tu empresa pierde tiempo en tareas manuales/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /tecnologia aplicada a problemas de negocio/i })).toBeInTheDocument()
  expect(screen.getByText(/openai/i)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /asi funciona una automatizacion basa/i })).toBeInTheDocument()

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
      name: /experiencias visuales para vender soluciones digitales con mas presencia/i,
    }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', {
      name: /un chatbot con ia que responde a tus clientes por ti/i,
    }),
  ).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /consultar solucion/i }).length).toBeGreaterThanOrEqual(2)
  const splineScenes = await screen.findAllByTestId('mock-spline-scene')
  expect(
    splineScenes.some(
      (node) => node.getAttribute('data-scene') === 'https://prod.spline.design/NBUruauj2L3toHhz/scene.splinecode',
    ),
  ).toBe(true)
})
