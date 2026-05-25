import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '../components/ContactForm'

test('muestra errores requeridos y confirma envio simulado', async () => {
  const user = userEvent.setup()

  render(<ContactForm />)

  await user.click(screen.getByRole('button', { name: /enviar/i }))

  expect(screen.getByText(/introduce tu nombre/i)).toBeInTheDocument()
  expect(screen.getByText(/indica un email valido/i)).toBeInTheDocument()

  await user.type(screen.getByLabelText(/nombre/i), 'Ana')
  await user.type(screen.getByLabelText(/^email/i), 'ana@basa.es')
  await user.type(screen.getByLabelText(/telefono/i), '600123123')
  await user.selectOptions(screen.getByLabelText(/tipo de comercio/i), 'Restaurante')
  await user.selectOptions(
    screen.getByLabelText(/servicio que le interesa/i),
    'Carta digital con QR',
  )
  await user.type(
    screen.getByLabelText(/mensaje/i),
    'Necesito renovar la presencia digital del local',
  )
  await user.click(screen.getByRole('button', { name: /enviar/i }))

  expect(await screen.findByText(/hemos recibido tu solicitud/i)).toBeInTheDocument()
})
