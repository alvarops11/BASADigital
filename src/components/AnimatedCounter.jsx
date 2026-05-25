import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, suffix = '', duration = 1800 }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const hasAnimated = useRef(false)
  const rafRef = useRef(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateValue()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      mountedRef.current = false
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  function animateValue() {
    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplay(value)
      return
    }

    const target = parseFloat(numericMatch[0])
    const isFloat = value.includes('.')
    const prefix = value.slice(0, numericMatch.index)
    const postfix = value.slice(numericMatch.index + numericMatch[0].length)
    const start = performance.now()

    function step(now) {
      if (!mountedRef.current) return

      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased

      if (isFloat) {
        setDisplay(`${prefix}${current.toFixed(1)}${postfix}${suffix}`)
      } else {
        setDisplay(`${prefix}${Math.round(current)}${postfix}${suffix}`)
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        rafRef.current = null
      }
    }

    rafRef.current = requestAnimationFrame(step)
  }

  return <span ref={ref} className="animated-counter">{display}</span>
}
