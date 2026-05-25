import { Link } from 'react-router-dom'
import DeferredSpline from './DeferredSpline'
import Reveal from './Reveal'

export default function SplineSolutionCard({ solution, index = 0 }) {
  return (
    <Reveal className="spline-solution-card" variant="fade-up" delay={index * 0.04}>
      <article className="spline-solution-card__shell">
        <div className="spline-solution-card__copy">
          <p className="spline-solution-card__eyebrow">{solution.eyebrow}</p>
          <h2 className="spline-solution-card__title">{solution.title}</h2>
          <p className="spline-solution-card__description">{solution.description}</p>
          <div className="spline-solution-card__chips" aria-label="componentes de la solucion">
            {solution.tags.map((tag) => (
              <span key={tag} className="spline-solution-card__chip">
                {tag}
              </span>
            ))}
          </div>
          <Link className="button button--primary button--glow" to="/contacto">
            Consultar solucion
          </Link>
        </div>

        <div className="spline-solution-card__stage">
          <div className="spline-solution-card__stage-frame">
            <div className="spline-solution-card__stage-hud" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <DeferredSpline
              className="spline-solution-card__spline"
              fallbackClassName="spline-solution-card__spline-fallback"
              scene={solution.scene}
              testId={`solution-spline-${solution.id}`}
            />
            <div className="spline-solution-card__footer">
              <span>{solution.footerLabel}</span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
