import ContactForm from '../components/ContactForm'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'

const reasons = [
  'Detectar procesos manuales que se pueden automatizar.',
  'Aterrizar webs, cartas QR, reservas o automatizaciones segun tu negocio.',
  'Revisar oportunidades para hosteleria, clinicas, inmobiliarias, tiendas o servicios.',
  'Definir el primer paso viable sin llenar la home de informacion repetida.',
]

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Solicita un diagnostico digital gratuito"
        description="Cuentanos que necesitas: pagina web, carta QR, reservas, automatizacion de horarios, chatbot, CRM o un sistema interno mas claro."
        kicker="Diagnostico BASA"
      />
      <section className="page-section">
        <div className="container contact-layout">
          <Reveal className="contact-layout__aside">
            <p className="section-title__eyebrow">Punto de entrada</p>
            <h2>Que revisamos contigo</h2>
            <ul>
              {reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="contact-layout__badge">
              <span>Respuesta inicial</span>
              <strong>Enfocada a una solucion concreta</strong>
            </div>
          </Reveal>
          <Reveal className="contact-layout__form-wrap" delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
