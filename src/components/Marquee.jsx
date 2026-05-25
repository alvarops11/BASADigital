/**
 * Marquee — infinite horizontal scrolling ticker.
 * Duplicates children to create seamless loop.
 */
export default function Marquee({ items, reverse = false, className = '' }) {
  const animClass = reverse ? 'marquee__track--reverse' : ''

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className={`marquee__track ${animClass}`}>
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">{item}</span>
        ))}
      </div>
    </div>
  )
}
