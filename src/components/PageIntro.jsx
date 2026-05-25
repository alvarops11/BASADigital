import Reveal from './Reveal'

export default function PageIntro({ eyebrow, title, description, kicker }) {
  return (
    <section className="page-intro">
      <div className="container page-intro__shell">
        <Reveal className="page-intro__copy">
          {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p>{description}</p>
        </Reveal>
        <Reveal className="page-intro__panel" delay={0.08}>
          <span className="page-intro__panel-label">BASA Digital</span>
          <strong>{kicker}</strong>
          <p>Una sola direccion visual y comercial para tecnologia util en comercios reales.</p>
        </Reveal>
      </div>
    </section>
  )
}
