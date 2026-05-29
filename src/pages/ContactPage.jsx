import ContactForm from '../components/ContactForm'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'

const reasons = [
  'Detectar procesos manuales que se pueden automatizar.',
  'Priorizar soluciones de IA, software o datos con impacto real.',
  'Definir un primer sistema viable para mejorar gestion y productividad.',
]

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Solicita un diagnostico digital gratuito"
        description="Cuentanos que procesos, herramientas o tareas frenan a tu empresa y revisaremos oportunidades reales de automatizacion, IA y software."
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
              <strong>Enfocada a procesos y automatizacion</strong>
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
