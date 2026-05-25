import { motion, useReducedMotion } from 'framer-motion'
import { Fragment, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const signalCards = [
  {
    title: 'Panel de control comercial',
    value: 'Activa',
    detail: 'Captacion, reservas y respuesta en un mismo frente.',
  },
  {
    title: 'Proceso conectado',
    value: '4 fases',
    detail: 'Analisis, diseno, lanzamiento y mejora continua.',
  },
]

const headlineWords = 'Soluciones digitales para comercios que necesitan moverse mas rapido'.split(' ')

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const ensurePlayback = () => {
      const playAttempt = video.play()
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => {})
      }
    }

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        ensurePlayback()
      }
    }

    video.addEventListener('canplay', ensurePlayback)
    video.addEventListener('stalled', ensurePlayback)
    document.addEventListener('visibilitychange', onVisibilityChange)
    ensurePlayback()

    return () => {
      video.removeEventListener('canplay', ensurePlayback)
      video.removeEventListener('stalled', ensurePlayback)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__media">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          poster="/BASA DIGITAL/foto fondo.jpg"
          className="hero__video"
        >
          <source src="/basadigital/video-fondo.webm" type="video/webm" />
          <source src="/basadigital/video-fondo.mp4" type="video/mp4" />
        </video>
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy-panel">
          <Reveal variant="fade-down" delay={0.1}>
            <div className="hero__brandline">
              <div className="hero__brandmark">
                <span className="hero__brandmark-frame">
                  <img className="hero__brandmark-logo" src="/BASA DIGITAL/Logo.png" alt="" aria-hidden="true" />
                </span>
                <span className="hero__eyebrow">BASA Digital</span>
              </div>
              <span className="hero__status">
                <span className="hero__status-dot" />
                Sistema activo
              </span>
            </div>
          </Reveal>

          <h1 className="hero__headline">
            {headlineWords.map((word, i) => (
              <Fragment key={word + i}>
                <motion.span
                  className="hero__word"
                  initial={reduceMotion ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={reduceMotion ? undefined : {
                    duration: 0.6,
                    delay: 0.3 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
                {i < headlineWords.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </h1>

          <Reveal variant="blur-in" delay={0.9}>
            <p className="hero__copy">
              Web, reservas, automatizacion y presencia digital con una base visual fuerte, un
              planteamiento comercial claro y tecnologia util para negocios reales.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={1.1}>
            <div className="hero__actions">
              <Link className="button button--primary button--glow" to="/contacto">
                Solicitar presupuesto
              </Link>
              <Link className="button button--secondary" to="/soluciones">
                Ver soluciones
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__ui-stack" variant="scale-in" delay={0.4} duration={0.9}>
          <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
          <div className="hero__orbit hero__orbit--two" aria-hidden="true" />
          {signalCards.map((card, index) => (
            <motion.article
              key={card.title}
              className={`hero__signal-card hero__signal-card--${index + 1}`}
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.92 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={reduceMotion ? undefined : {
                duration: 0.65,
                delay: 0.8 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p>{card.title}</p>
              <strong>{card.value}</strong>
              <span>{card.detail}</span>
            </motion.article>
          ))}
          <motion.div
            className="hero__micro-panel hero__micro-panel--chat"
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/BASA DIGITAL/foto chatbot.jpg" alt="" aria-hidden="true" />
            <div>
              <p>Atencion automatizada</p>
              <strong>Respuesta mas rapida</strong>
            </div>
          </motion.div>
          <motion.div
            className="hero__micro-panel hero__micro-panel--automation"
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/BASA DIGITAL/automatizacion.png" alt="" aria-hidden="true" />
            <div>
              <p>Automatizacion</p>
              <strong>Menos tareas repetitivas</strong>
            </div>
          </motion.div>
        </Reveal>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={reduceMotion ? undefined : { delay: 2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  )
}
