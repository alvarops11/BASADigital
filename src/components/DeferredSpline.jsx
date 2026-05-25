import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const SplineScene = lazy(() => import('@splinetool/react-spline'))

export default function DeferredSpline({
  scene,
  className,
  fallbackClassName,
  testId,
  rootMargin = '180px',
}) {
  const hostRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    if (!host || shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin, threshold: 0.01 },
    )

    observer.observe(host)
    return () => observer.disconnect()
  }, [rootMargin, shouldLoad])

  return (
    <div ref={hostRef} className={className} data-testid={testId}>
      {shouldLoad ? (
        <Suspense fallback={<div className={fallbackClassName} aria-hidden="true" />}>
          <SplineScene scene={scene} />
        </Suspense>
      ) : (
        <div className={fallbackClassName} aria-hidden="true" />
      )}
    </div>
  )
}
