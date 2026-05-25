import { Link } from 'react-router-dom'

export default function SolutionCard({ solution }) {
  return (
    <article className={`solution-card solution-card--${solution.accent}`}>
      <div className="solution-card__frame" aria-hidden="true" />
      <div className="solution-card__signal">{solution.metric}</div>
      <div className="solution-card__top">
        <p className="solution-card__eyebrow">{solution.eyebrow}</p>
        <h3>{solution.title}</h3>
        <p>{solution.description}</p>
      </div>
      <dl className="solution-card__meta">
        <div>
          <dt>Problema</dt>
          <dd>{solution.problem}</dd>
        </div>
        <div>
          <dt>Beneficio</dt>
          <dd>{solution.benefit}</dd>
        </div>
      </dl>
      <ul className="tag-list" aria-label={`Etiquetas de ${solution.title}`}>
        {solution.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <Link className="inline-link" to="/contacto">
        Consultar solucion
      </Link>
    </article>
  )
}
