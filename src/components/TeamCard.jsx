export default function TeamCard({ member }) {
  const imageSrc = member.image || null

  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="team-card">
      <div className="team-card__photo-slot">
        {imageSrc ? (
          <img src={imageSrc} alt={member.name} loading="lazy" decoding="async" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      <div className="team-card__body">
        <p className="team-card__role">{member.role}</p>
        <h3>{member.name}</h3>
        <p>{member.summary}</p>
        <ul className="team-card__focus">
          {member.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="inline-link" href={member.linkedin} target="_blank" rel="noreferrer">
          Ver LinkedIn
        </a>
      </div>
    </article>
  )
}
