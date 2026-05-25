import { useEffect, useRef, useState } from 'react'

export default function DeferredVideo({
  className,
  poster,
  src,
  type = 'video/mp4',
  rootMargin = '220px',
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
    <div
      ref={hostRef}
      className={`${className}__shell`}
      style={{ position: 'absolute', inset: 0 }}
    >
      <video
        autoPlay={shouldLoad}
        muted
        loop
        playsInline
        preload={shouldLoad ? 'metadata' : 'none'}
        poster={poster}
        className={className}
      >
        {shouldLoad ? <source src={src} type={type} /> : null}
      </video>
    </div>
  )
}
