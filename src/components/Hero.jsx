import { motion, useReducedMotion } from 'framer-motion'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const headlineWords = 'Tecnologia que impulsa tu negocio.'.split(' ')

const automationNodes = [
  { label: 'Formulario', value: 'Lead captado' },
  { label: 'IA', value: 'Analisis' },
  { label: 'CRM', value: 'Registro' },
  { label: 'WhatsApp', value: 'Respuesta' },
  { label: 'Dashboard', value: 'Control' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__tech-bg" />
        <div className="hero__veil" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy-panel">
          <Reveal variant="fade-down" delay={0.08}>
            <div className="hero__brandline">
              <div className="hero__brandmark">
                <span className="hero__brandmark-frame">
                  <img className="hero__brandmark-logo" src="/BASA DIGITAL/Logo.png" alt="" aria-hidden="true" />
                </span>
                <span className="hero__eyebrow">Automatizacion, IA y software B2B</span>
              </div>
              <span className="hero__status">
                <span className="hero__status-dot" />
                Sistemas escalables
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
                    delay: 0.22 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
                {i < headlineWords.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </h1>

          <Reveal variant="blur-in" delay={0.58}>
            <p className="hero__copy">
              Automatizamos procesos, desarrollamos soluciones digitales e implementamos inteligencia
              artificial para que tu empresa ahorre tiempo, reduzca errores y escale mas rapido.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.76}>
            <div className="hero__actions">
              <Link className="button button--primary button--glow" to="/contacto">
                Solicitar diagnostico
              </Link>
              <Link className="button button--secondary" to="/soluciones">
                Ver soluciones
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__automation-lab" variant="scale-in" delay={0.26} duration={0.85}>
          <div className="automation-window">
            <div className="automation-window__bar">
              <span />
              <span />
              <span />
              <strong>BASA Automation OS</strong>
            </div>
            <div className="automation-window__body">
              <div className="automation-flow">
                {automationNodes.map((node, index) => (
                  <motion.div
                    className="automation-node"
                    key={node.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={reduceMotion ? undefined : {
                      duration: 0.45,
                      delay: 0.65 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span>{node.label}</span>
                    <strong>{node.value}</strong>
                  </motion.div>
                ))}
              </div>
              <div className="automation-dashboard">
                <div>
                  <span>Tiempo recuperado</span>
                  <strong>Procesos sin friccion</strong>
                </div>
                <div>
                  <span>Pipeline</span>
                  <strong>Lead → venta → reporting</strong>
                </div>
                <div className="automation-chart" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
