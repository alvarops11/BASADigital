import { useEffect, useState } from 'react'

const initialForm = {
  name: '',
  company: '',
  email: '',
  need: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Introduce tu nombre'
  if (!values.company.trim()) errors.company = 'Indica el nombre de la empresa'
  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Indica un email valido'
  }
  if (!values.need.trim()) errors.need = 'Cuentanos brevemente la necesidad'

  return errors
}

export default function ContactForm({ compact = false }) {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

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
    if (serverError) setServerError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setErrors({})
    setStatus('sending')
    setServerError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          phone: 'No indicado',
          businessType: values.company,
          interest: 'Diagnostico digital gratuito',
          message: values.need,
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo enviar el formulario.')
      }

      setStatus('success')
      setValues(initialForm)
    } catch (error) {
      setStatus('error')
      setServerError(error.message || 'Error al enviar el formulario.')
    }
  }

  return (
    <form className={`contact-form${compact ? ' contact-form--compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <label>
          <span>Nombre</span>
          <input name="name" value={values.name} onChange={handleChange} />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>
        <label>
          <span>Empresa</span>
          <input name="company" value={values.company} onChange={handleChange} />
          {errors.company ? <small>{errors.company}</small> : null}
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email ? <small>{errors.email}</small> : null}
        </label>
        <label className="contact-form__full">
          <span>Necesidad</span>
          <textarea name="need" rows="5" value={values.need} onChange={handleChange} />
          {errors.need ? <small>{errors.need}</small> : null}
        </label>
      </div>

      <div className="contact-form__footer">
        <button className="button button--primary button--glow" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Solicitar diagnostico'}
        </button>
        <p className="contact-form__note">Te responderemos por email tras revisar el contexto.</p>
      </div>

      {status === 'success' ? (
        <p className="contact-form__success">Hemos recibido tu solicitud y te responderemos pronto.</p>
      ) : null}
      {serverError ? <p className="contact-form__error">{serverError}</p> : null}
    </form>
  )
}
