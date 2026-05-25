const phone = '34663300680'
const message =
  'Buenas Alfonso, me gustaria solicitar informacion sobre una solucion digital para mi empresa'

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp para solicitar informacion"
      title="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.1 0a11.9 11.9 0 0 0-10.3 17.9L0 24l6.3-1.65A11.9 11.9 0 0 0 12.1 24h.01A11.9 11.9 0 0 0 24 12.1a11.78 11.78 0 0 0-3.48-8.62Zm-8.41 18.5h-.01a9.87 9.87 0 0 1-5.02-1.37l-.36-.22-3.74.98 1-3.64-.24-.37a9.89 9.89 0 1 1 8.37 4.62Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.46-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.46-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.2-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.48 1.69.61.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}
