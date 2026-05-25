import { useEffect, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  interest: '',
  message: '',
}

const businessOptions = [
  'Bar',
  'Restaurante',
  'Tienda',
  'Peluqueria',
  'Clinica',
  'Academia',
  'Inmobiliaria',
  'Gimnasio',
  'Otro',
]

const interestOptions = [
  'Web profesional para restaurante',
  'Carta digital con QR',
  'Sistema de reservas online',
  'Landing page para campana local',
  'Chatbot para atencion al cliente',
  'Automatizacion de formularios y leads',
  'Catalogo digital para tienda',
  'Web inmobiliaria con captacion de propietarios',
  'Sistema de pedidos o solicitudes online',
]

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Introduce tu nombre'
  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Indica un email valido'
  }
  if (!values.phone.trim()) errors.phone = 'Indica un telefono de contacto'
  if (!values.businessType) errors.businessType = 'Selecciona el tipo de comercio'
  if (!values.interest) errors.interest = 'Selecciona el servicio que te interesa'
  if (!values.message.trim()) errors.message = 'Cuentanos brevemente lo que necesitas'

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (status !== 'success') {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setStatus('idle')
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [status])

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setErrors({})
    setStatus('success')
    setValues(initialForm)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <label>
          <span>Nombre</span>
          <input name="name" value={values.name} onChange={handleChange} />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email ? <small>{errors.email}</small> : null}
        </label>
        <label>
          <span>Telefono</span>
          <input name="phone" type="tel" value={values.phone} onChange={handleChange} />
          {errors.phone ? <small>{errors.phone}</small> : null}
        </label>
        <label>
          <span>Tipo de comercio</span>
          <select name="businessType" value={values.businessType} onChange={handleChange}>
            <option value="">Selecciona una opcion</option>
            {businessOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.businessType ? <small>{errors.businessType}</small> : null}
        </label>
        <label>
          <span>Servicio que le interesa</span>
          <select name="interest" value={values.interest} onChange={handleChange}>
            <option value="">Selecciona una opcion</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.interest ? <small>{errors.interest}</small> : null}
        </label>
        <label className="contact-form__full">
          <span>Mensaje</span>
          <textarea name="message" rows="5" value={values.message} onChange={handleChange} />
          {errors.message ? <small>{errors.message}</small> : null}
        </label>
      </div>

      <div className="contact-form__footer">
        <button className="button button--primary" type="submit">
          Enviar solicitud
        </button>
        <p className="contact-form__note">
          Formulario preparado para una integracion real. En esta version el envio es simulado.
        </p>
      </div>

      {status === 'success' ? (
        <p className="contact-form__success">Hemos recibido tu solicitud y te responderemos pronto.</p>
      ) : null}
    </form>
  )
}
