import Reveal from './Reveal'
import ContactForm from './ContactForm'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-section__inner" variant="scale-in">
          <div className="cta-section__copy">
            <p className="section-title__eyebrow">Siguiente paso</p>
            <h2>Solicita un diagnostico digital gratuito</h2>
            <p>
              Analizamos tus procesos, herramientas y oportunidades de automatizacion para detectar
              mejoras reales en captacion, gestion y productividad.
            </p>
            <div className="cta-section__signals" aria-label="Areas de analisis">
              <span>Procesos</span>
              <span>Herramientas</span>
              <span>Datos</span>
              <span>IA</span>
            </div>
          </div>
          <ContactForm compact />
        </Reveal>
      </div>
    </section>
  )
}
