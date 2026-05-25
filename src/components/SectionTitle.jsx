export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
}) {
  return (
    <div className={`section-title section-title--${align} section-title--${tone}`}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-title__description">{description}</p> : null}
    </div>
  )
}
