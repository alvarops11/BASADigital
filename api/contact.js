const RESEND_URL = 'https://api.resend.com/emails'

function sanitize(value, max = 2000) {
  return String(value || '')
    .trim()
    .slice(0, max)
}

function buildHtml(payload) {
  return `
    <h2>Nuevo contacto desde BASA Digital</h2>
    <p><strong>Nombre:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Telefono:</strong> ${payload.phone}</p>
    <p><strong>Tipo de comercio:</strong> ${payload.businessType}</p>
    <p><strong>Servicio de interes:</strong> ${payload.interest}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${payload.message.replace(/\n/g, '<br/>')}</p>
  `.trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !toEmail || !fromEmail) {
    return res.status(500).json({
      error: 'Faltan variables de entorno para email (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).',
    })
  }

  const body = req.body || {}
  const payload = {
    name: sanitize(body.name, 120),
    email: sanitize(body.email, 180),
    phone: sanitize(body.phone, 80),
    businessType: sanitize(body.businessType, 120),
    interest: sanitize(body.interest, 200),
    message: sanitize(body.message, 4000),
  }

  if (
    !payload.name ||
    !payload.email ||
    !payload.phone ||
    !payload.businessType ||
    !payload.interest ||
    !payload.message
  ) {
    return res.status(400).json({ error: 'Completa todos los campos obligatorios.' })
  }

  const recipients = toEmail
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean)

  const emailPayload = {
    from: fromEmail,
    to: recipients,
    reply_to: payload.email,
    subject: `Nuevo lead BASA Digital: ${payload.name}`,
    html: buildHtml(payload),
  }

  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    const raw = await response.text()
    let data = null
    try {
      data = raw ? JSON.parse(raw) : null
    } catch {
      data = null
    }

    if (!response.ok) {
      return res.status(response.status || 502).json({
        error: data?.message || 'No se pudo enviar el correo.',
      })
    }

    return res.status(200).json({ ok: true, id: data?.id || null })
  } catch {
    return res.status(502).json({ error: 'No se pudo conectar con el servicio de correo.' })
  }
}
