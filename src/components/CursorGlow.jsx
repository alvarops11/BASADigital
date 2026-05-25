import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion || coarsePointer || 'ontouchstart' in window) {
      glow.style.display = 'none'
      return
    }

    let x = 0
    let y = 0
    let rafId = null

    function onMove(e) {
      x = e.clientX
      y = e.clientY

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          glow.style.transform = `translate(${x - 200}px, ${y - 200}px)`
          glow.style.opacity = '1'
          rafId = null
        })
      }
    }

    function onLeave() {
      glow.style.opacity = '0'
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" style={{ opacity: 0 }} />
}
