const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'

function getSystemPrompt() {
  return `
Eres el asistente virtual de BASA Digital.
Habla siempre en espanol claro, cercano y profesional.

Contexto de marca:
- BASA Digital es un proyecto orientado a la digitalizacion de negocios.
- Ayudamos a comercios con web, automatizacion, captacion, reservas, cartas digitales, chatbots y procesos digitales.

Reglas de respuesta:
- Responde dudas y orienta al usuario de forma comercial y util.
- Intenta derivar la conversacion hacia:
  1) la seccion de contacto de la web, o
  2) escribir por WhatsApp para estudiar su caso.
- Nunca digas que "no se puede". Si algo es incierto, responde que probablemente si se puede, pero hay que estudiar su caso.
- Si preguntan "quienes sois", responde que sois un proyecto orientado a la digitalizacion de negocios.
- No inventes datos legales, tecnicos cerrados ni precios exactos.
- Si falta contexto, haz una sola pregunta de aclaracion.
- Respuestas cortas: maximo 5 frases, salvo que pidan detalle.
`.trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY no configurada en servidor.' })
  }

  const model = process.env.OPENROUTER_MODEL || 'openrouter/free'
  const messages = Array.isArray(req.body?.messages) ? req.body.messages : []
  if (!messages.length) {
    return res.status(400).json({ error: 'messages es obligatorio.' })
  }

  const safeMessages = messages
    .filter((item) => item && typeof item.content === 'string')
    .map((item) => ({
      role: item.role === 'assistant' ? 'assistant' : 'user',
      content: item.content.slice(0, 1500),
    }))
    .slice(-12)

  const payload = {
    model,
    temperature: 0.6,
    max_tokens: 260,
    messages: [{ role: 'system', content: getSystemPrompt() }, ...safeMessages],
  }

  try {
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.OPENROUTER_SITE_URL || 'https://basadigital.es',
        'X-Title': 'BASA Digital Chat',
      },
      body: JSON.stringify(payload),
    })

    const raw = await response.text()
    let data = null

    try {
      data = raw ? JSON.parse(raw) : null
    } catch {
      data = null
    }

    if (!response.ok) {
      console.error('OpenRouter non-OK', {
        status: response.status,
        model,
        body: raw?.slice(0, 400),
      })
      return res.status(response.status || 502).json({
        error: data?.error?.message || `Error en OpenRouter (${response.status}).`,
      })
    }

    const candidate = data?.choices?.[0]?.message?.content
    const reply =
      typeof candidate === 'string'
        ? candidate.trim()
        : Array.isArray(candidate)
          ? candidate
              .filter((part) => part?.type === 'text' && typeof part?.text === 'string')
              .map((part) => part.text)
              .join('\n')
              .trim()
          : ''

    if (!reply) {
      console.error('OpenRouter empty reply', {
        model,
        body: raw?.slice(0, 400),
      })
      return res.status(502).json({
        error: 'OpenRouter respondio sin texto util.',
        meta: {
          hasChoices: Boolean(data?.choices?.length),
          finishReason: data?.choices?.[0]?.finish_reason || null,
        },
      })
    }

    return res.status(200).json({ reply })
  } catch {
    console.error('OpenRouter request failed', { model })
    return res.status(502).json({ error: 'No se pudo conectar con OpenRouter.' })
  }
}
