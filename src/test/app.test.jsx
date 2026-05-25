import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

test('renderiza la navegacion principal y el acceso legal del shell comun', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByRole('navigation', { name: /principal/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /soluciones/i }).length).toBeGreaterThanOrEqual(2)
  expect(screen.getAllByRole('link', { name: /nosotros/i }).length).toBeGreaterThanOrEqual(2)
  expect(screen.getAllByRole('link', { name: /contacto/i }).length).toBeGreaterThanOrEqual(2)
  expect(screen.getByRole('link', { name: /informacion legal/i })).toBeInTheDocument()
  expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument()
})
