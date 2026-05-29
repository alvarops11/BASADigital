import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import ContactForm from '../components/ContactForm'

test('muestra errores requeridos y confirma envio correcto', async () => {
  const user = userEvent.setup()
  const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ ok: true }),
  })

  render(<ContactForm />)

  await user.click(screen.getByRole('button', { name: /solicitar diagnostico/i }))

  expect(screen.getByText(/introduce tu nombre/i)).toBeInTheDocument()
  expect(screen.getByText(/indica el nombre de la empresa/i)).toBeInTheDocument()
  expect(screen.getByText(/indica un email valido/i)).toBeInTheDocument()

  await user.type(screen.getByRole('textbox', { name: /^nombre/i }), 'Ana')
  await user.type(screen.getByRole('textbox', { name: /^empresa/i }), 'BASA Test')
  await user.type(screen.getByRole('textbox', { name: /^email/i }), 'ana@basa.es')
  await user.type(
    screen.getByLabelText(/necesidad/i),
    'Necesito automatizar el seguimiento comercial',
  )
  await user.click(screen.getByRole('button', { name: /solicitar diagnostico/i }))

  expect(await screen.findByText(/hemos recibido tu solicitud/i)).toBeInTheDocument()
  expect(fetchSpy).toHaveBeenCalledWith(
    '/api/contact',
    expect.objectContaining({
      method: 'POST',
    })
  )

  fetchSpy.mockRestore()
})
