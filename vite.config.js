import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'

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

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
    })
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

const localApiPlugin = {
  name: 'local-chat-api',
  configureServer(server) {
    server.middlewares.use('/api/chat', async (req, res, next) => {
      if (req.method !== 'POST') {
        res.statusCode = 405
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Method not allowed' }))
        return
      }

      const apiKey = process.env.OPENROUTER_API_KEY
      if (!apiKey) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'OPENROUTER_API_KEY no configurada en local.' }))
        return
      }

      try {
        const body = await readJsonBody(req)
        const sourceMessages = Array.isArray(body?.messages) ? body.messages : []
        const safeMessages = sourceMessages
          .filter((item) => item && typeof item.content === 'string')
          .map((item) => ({
            role: item.role === 'assistant' ? 'assistant' : 'user',
            content: item.content.slice(0, 1500),
          }))
          .slice(-12)

        if (!safeMessages.length) {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'messages es obligatorio.' }))
          return
        }

        const response = await fetch(OPENROUTER_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': process.env.OPENROUTER_SITE_URL || 'http://localhost:5173',
            'X-Title': 'BASA Digital Chat (Local)',
          },
          body: JSON.stringify({
            model: process.env.OPENROUTER_MODEL || 'openrouter/free',
            temperature: 0.6,
            max_tokens: 260,
            messages: [{ role: 'system', content: getSystemPrompt() }, ...safeMessages],
          }),
        })

        const data = await response.json()
        if (!response.ok) {
          res.statusCode = response.status
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: data?.error?.message || 'Error en OpenRouter.' }))
          return
        }

        const reply = data?.choices?.[0]?.message?.content?.trim()
        if (!reply) {
          res.statusCode = 502
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'OpenRouter no devolvio contenido.' }))
          return
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ reply }))
      } catch {
        next()
      }
    })
  },
}

const googleVerificationPlugin = {
  name: 'google-verification-copy',
  async writeBundle(options) {
    const outDir = options?.dir || 'dist'
    const source = resolve(process.cwd(), 'public', 'googleeeb28b243f7b9f3e.html')
    const target = resolve(process.cwd(), outDir, 'googleeeb28b243f7b9f3e.html')

    try {
      await copyFile(source, target)
    } catch {
      // Ignore if file is not present in local env.
    }
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin, googleVerificationPlugin],
})
