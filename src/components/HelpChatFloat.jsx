import { useState } from 'react'

const initialMessages = [
  {
    id: 'welcome',
    role: 'assistant',
    text: 'Hola. Soy el asistente de BASA Digital. Cuentame tu duda y te orientamos.',
  },
]

function createUserMessage(text) {
  return {
    id: `user-${crypto.randomUUID()}`,
    role: 'user',
    text,
  }
}

function createAssistantMessage(text) {
  return {
    id: `assistant-${crypto.randomUUID()}`,
    role: 'assistant',
    text,
  }
}

export default function HelpChatFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState(initialMessages)

  const canSend = draft.trim().length > 0 && !isTyping

  async function handleSend(event) {
    event.preventDefault()
    const question = draft.trim()
    if (!question || isTyping) return

    const userMessage = createUserMessage(question)
    setMessages((current) => [...current, userMessage])
    setDraft('')
    setIsTyping(true)

    try {
      const payloadMessages = [...messages, userMessage].map((message) => ({
        role: message.role,
        content: message.text,
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: payloadMessages.slice(-12),
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo obtener respuesta del asistente.')
      }

      setMessages((current) => [...current, createAssistantMessage(data.reply)])
    } catch {
      setMessages((current) => [
        ...current,
        createAssistantMessage(
          'No he podido responder ahora mismo. Intentalo de nuevo en unos segundos.'
        ),
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className="help-chat-float"
        aria-label="Abrir chat de dudas"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 2h2v2h2.5a3.5 3.5 0 0 1 3.5 3.5V9h1a2 2 0 1 1 0 4h-1v1.5a3.5 3.5 0 0 1-3.5 3.5H14v2h-4v-2H8.5A3.5 3.5 0 0 1 5 14.5V13H4a2 2 0 1 1 0-4h1V7.5A3.5 3.5 0 0 1 8.5 4H11V2Zm-2.5 4A1.5 1.5 0 0 0 7 7.5v7A1.5 1.5 0 0 0 8.5 16h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 6h-7ZM10 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-5 5h6v1H9v-1Z" />
        </svg>
      </button>

      {isOpen ? (
        <section className="help-chat-panel" aria-label="Chat de dudas BASA Digital">
          <header className="help-chat-panel__header">
            <strong>Dudas rapidas</strong>
            <button
              type="button"
              className="help-chat-panel__close"
              aria-label="Cerrar chat"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="help-chat-panel__messages">
            {messages.map((message) => (
              <p key={message.id} className={`help-chat-panel__bubble help-chat-panel__bubble--${message.role}`}>
                {message.text}
              </p>
            ))}
            {isTyping ? <p className="help-chat-panel__typing">Escribiendo...</p> : null}
          </div>

          <form className="help-chat-panel__composer" onSubmit={handleSend}>
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Escribe tu duda..."
              aria-label="Escribe tu duda"
            />
            <button type="submit" disabled={!canSend}>
              Enviar
            </button>
          </form>

          <p className="help-chat-panel__meta">
            Conectado por API segura (clave protegida en servidor).
          </p>
        </section>
      ) : null}
    </>
  )
}
