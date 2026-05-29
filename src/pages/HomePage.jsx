import CTASection from '../components/CTASection'
import DeferredVideo from '../components/DeferredVideo'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import ScrollVideo from '../components/ScrollVideo'
import SectionTitle from '../components/SectionTitle'
import { solutions } from '../data/solutions'

const benefitPanels = [
  {
    value: '01',
    title: 'Mas contactos',
    text: 'Tu comercio aparece mejor, explica mejor y genera una primera impresion mas fuerte.',
  },
  {
    value: '02',
    title: 'Menos friccion',
    text: 'Reservas, consultas y solicitudes entran de forma mas clara y ordenada.',
  },
  {
    value: '03',
    title: 'Mas control',
    text: 'La parte digital deja de depender de improvisaciones y empieza a trabajar con sentido.',
  },
]

const commerceTypes = [
  'Bares',
  'Restaurantes',
  'Tiendas',
  'Peluquerias',
  'Clinicas',
  'Academias',
  'Inmobiliarias',
  'Gimnasios',
  'Estudios',
  'Consultorias',
]

const solutionTicker = [
  'Cartas QR',
  'Reservas online',
  'Paginas web',
  'Automatizacion de horarios',
  'WhatsApp Business',
  'CRM de leads',
  'ChatBOT con IA',
  'Dashboards',
  'Pedidos digitales',
]

const processSteps = [
  {
    label: 'Analizamos tu comercio',
    detail: 'Detectamos que frena la captacion, la respuesta o la imagen del negocio.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: 'Disenamos la solucion',
    detail: 'Proponemos una respuesta concreta, sin tecnologia gratuita ni inflada.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
  {
    label: 'La lanzamos',
    detail: 'Montamos una presencia digital clara, funcional y preparada para usar.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: 'La mejoramos',
    detail: 'Ajustamos el sistema segun uso, conversion y necesidades reales.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollVideo />

      <section className="page-section page-section--ticker">
        <div className="home-solution-ticker">
          <Marquee items={solutionTicker} />
          <Marquee items={commerceTypes} reverse />
        </div>
      </section>

      <section className="page-section">
        <div className="container home-command-grid">
          <Reveal className="home-command-grid__copy" variant="fade-right">
            <SectionTitle
              eyebrow="Beneficios para comercios"
              title="Una presencia digital pensada para captar, explicar y convertir"
              description="La web no debe ser un escaparate decorativo. Debe ordenar el mensaje, mejorar la percepcion y facilitar la accion correcta."
              tone="bright"
            />
          </Reveal>
          <div className="home-command-grid__panels">
            {benefitPanels.map((panel, index) => (
              <Reveal key={panel.title} className="command-panel" delay={index * 0.08} variant="scale-in">
                <span>{panel.value}</span>
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--matrix">
        <div className="container commerce-matrix">
          <Reveal variant="blur-in">
            <SectionTitle
              eyebrow="Tipos de comercio"
              title="El sistema se adapta al contexto del negocio, no al reves"
              description="BASA Digital aterriza lo tecnologico a sectores que necesitan resultados visibles y procesos mas limpios."
            />
          </Reveal>
        </div>

        <div className="commerce-matrix__marquee-wrap">
          <Marquee items={commerceTypes} />
          <Marquee items={commerceTypes} reverse />
        </div>

        <div className="container">
          <Reveal className="commerce-matrix__media" delay={0.12} variant="scale-in">
            <DeferredVideo
              className="commerce-matrix__video"
              poster="/BASA DIGITAL/foto fondo.jpg"
              src="/BASA DIGITAL/video promocionaÃ±.mp4"
            />
            <div className="commerce-matrix__media-overlay" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container process-ribbon">
          <Reveal variant="fade-up">
            <SectionTitle
              eyebrow="Metodo"
              title="De la situacion actual a una operativa digital mas clara"
              description="Cada fase conecta con la siguiente para que la solucion tenga continuidad y no quede en una accion aislada."
            />
          </Reveal>
          <div className="process-ribbon__grid">
            {processSteps.map((step, index) => (
              <Reveal key={step.label} className="process-node" delay={index * 0.1} variant="fade-up">
                <span className="process-node__icon">{step.icon}</span>
                <span className="process-node__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container featured-solutions">
          <Reveal variant="blur-in">
            <SectionTitle
              eyebrow="Soluciones destacadas"
              title="Modulos concretos para problemas comerciales concretos"
              description="Una seleccion inicial de servicios utiles para comercios que quieren avanzar sin montar una estructura innecesaria."
              tone="bright"
            />
          </Reveal>
          <div className="featured-solutions__grid">
            {solutions.slice(0, 4).map((solution, index) => (
              <Reveal key={solution.title} delay={index * 0.08} variant="scale-in">
                <article className={`featured-solution featured-solution--${solution.accent}`}>
                  <p>{solution.eyebrow}</p>
                  <h3>{solution.title}</h3>
                  <span>{solution.metric}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
