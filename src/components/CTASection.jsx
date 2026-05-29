import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-section__inner" variant="scale-in">
          {/* Video background */}
          <video
            className="cta-section__video"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/BASA DIGITAL/v2_f26cd464-0957-40a5-b8e0-04bc31a2014a.mp4" type="video/mp4" />
          </video>
          <div className="cta-section__video-overlay" aria-hidden="true" />

          <div className="cta-section__copy">
            <p className="section-title__eyebrow">Siguiente paso</p>
            <h2>Un sistema visual hecho para vender mejor</h2>
            <p>
              Si el comercio ya se mueve, su parte digital no puede quedarse atras. Revisamos el
              punto de fuga y planteamos una solucion concreta para actuar rapido.
            </p>
          </div>
          <div className="cta-section__actions">
            <Link className="button button--primary button--glow" to="/contacto">
              Solicitar presupuesto
            </Link>
            <Link className="button button--secondary" to="/soluciones">
              Ver soluciones
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
