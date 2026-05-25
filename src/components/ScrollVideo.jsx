import DeferredSpline from './DeferredSpline'
import Reveal from './Reveal'

const featureChips = ['Interfaz viva', 'Presencia premium', 'Flujo comercial']

export default function ScrollVideo() {
  return (
    <section className="scroll-video" aria-labelledby="interactive-showcase-title">
      <div className="container scroll-video__shell">
        <Reveal className="scroll-video__copy" variant="fade-right">
          <p className="scroll-video__eyebrow">Experiencia digital</p>
          <h2 id="interactive-showcase-title" className="scroll-video__headline">
            La imagen del negocio tambien tiene que sentirse actual, precisa y memorable
          </h2>
          <p className="scroll-video__description">
            BASA Digital construye entornos digitales que se ven mejor, se entienden mejor
            y guian mejor la accion del cliente.
          </p>

          <div className="scroll-video__chips" aria-label="atributos de la experiencia">
            {featureChips.map((chip) => (
              <span key={chip} className="scroll-video__chip">
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="scroll-video__stage" variant="scale-in" delay={0.08}>
          <div className="scroll-video__stage-frame">
            <div className="scroll-video__stage-hud" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <DeferredSpline
              className="scroll-video__spline"
              fallbackClassName="scroll-video__spline-fallback"
              scene="https://prod.spline.design/pr1ylEisLMMRAwfI/scene.splinecode"
              testId="spline-scene"
            />
            <div className="scroll-video__footer">
              <span>Tecnologia 3D</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
