import CTASection from '../components/CTASection'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

const problems = [
  'Seguimiento manual de clientes',
  'Procesos repetitivos',
  'Uso excesivo de Excel',
  'Falta de automatizacion',
  'Informacion dispersa',
  'Perdida de oportunidades comerciales',
]

const solutions = [
  {
    title: 'Automatizacion de procesos',
    featured: true,
    problem: 'Tareas manuales que consumen horas.',
    solution: 'Flujos entre formularios, CRM, WhatsApp y email.',
    benefit: 'Menos errores y mas velocidad operativa.',
  },
  {
    title: 'Inteligencia artificial',
    featured: true,
    problem: 'Consultas y datos que requieren revision.',
    solution: 'Agentes IA para clasificar, responder y asistir.',
    benefit: 'Atencion consistente sin mas carga.',
  },
  {
    title: 'Desarrollo web y software',
    problem: 'Herramientas genericas que no encajan.',
    solution: 'Aplicaciones, portales y sistemas internos a medida.',
    benefit: 'Una base digital preparada para crecer.',
  },
  {
    title: 'Dashboards y analisis de datos',
    problem: 'Datos repartidos sin vision clara.',
    solution: 'KPIs, reporting automatico e integraciones.',
    benefit: 'Control real para decidir mejor.',
  },
  {
    title: 'Cartas QR y pedidos digitales',
    featured: true,
    problem: 'Cartas desactualizadas y cambios lentos.',
    solution: 'Cartas QR editables, alergenos y pedidos.',
    benefit: 'Mas agilidad para cliente y negocio.',
  },
  {
    title: 'Reservas y agendas online',
    featured: true,
    problem: 'Reservas por llamadas y mensajes sueltos.',
    solution: 'Agenda online con WhatsApp y calendario.',
    benefit: 'Menos interrupciones y mas reservas cerradas.',
  },
  {
    title: 'Automatizacion para hosteleria',
    problem: 'Horarios, avisos y turnos manuales.',
    solution: 'Automatizaciones para cambios, avisos y formularios.',
    benefit: 'Equipos mas coordinados cada dia.',
  },
  {
    title: 'Creacion de paginas web',
    problem: 'Webs antiguas que no convierten.',
    solution: 'Paginas modernas para leads, reservas o solicitudes.',
    benefit: 'Mas confianza y mejor captacion.',
  },
]

const technologies = [
  'OpenAI',
  'n8n',
  'Supabase',
  'PostgreSQL',
  'Next.js',
  'Stripe',
  'WhatsApp Business',
  'Google Workspace',
  'Airtable',
  'Notion',
]

const process = [
  ['01', 'Diagnostico', 'Analizamos procesos, herramientas, cuellos de botella y oportunidades de automatizacion.'],
  ['02', 'Estrategia', 'Priorizamos soluciones con impacto real en captacion, gestion o productividad.'],
  ['03', 'Diseno', 'Definimos arquitectura, experiencia, datos, integraciones y puntos de control.'],
  ['04', 'Implementacion', 'Construimos, conectamos y probamos el sistema con tu operativa real.'],
  ['05', 'Optimizacion', 'Medimos uso, ajustamos automatizaciones y preparamos nuevas mejoras.'],
]

const demoSteps = [
  'Lead entra',
  'IA analiza',
  'CRM registra',
  'WhatsApp responde',
  'Dashboard actualiza',
]

const sectorMarquee = [
  'Restaurantes',
  'Clinicas',
  'Inmobiliarias',
  'Bares',
  'Hoteles',
  'Asesorias',
  'Ecommerce',
  'Gimnasios',
  'Academias',
  'Tiendas',
]

const serviceMarquee = [
  'Cartas QR',
  'Reservas online',
  'Automatizacion de horarios',
  'Paginas web',
  'WhatsApp Business',
  'CRM de leads',
  'Recordatorios automaticos',
  'Dashboards',
  'Agentes IA',
  'Pedidos digitales',
]

const buildItems = [
  'Automatizaciones',
  'Agentes IA',
  'Dashboards',
  'Sistemas internos',
  'Integraciones',
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="page-section">
        <div className="container problem-section">
          <Reveal variant="blur-in">
            <SectionTitle
              eyebrow="Problemas operativos"
              title="Tu empresa pierde tiempo en tareas manuales?"
              description="Cuando los procesos dependen de copiar, pegar, perseguir respuestas y revisar hojas de calculo, el crecimiento se vuelve mas lento y menos controlable."
            />
          </Reveal>
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <Reveal className="problem-card" key={problem} delay={index * 0.05} variant="scale-in">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{problem}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container business-solutions">
          <Reveal variant="fade-up">
            <SectionTitle
              eyebrow="Soluciones BASA"
              title="Tecnologia aplicada a problemas de negocio"
              description="No vendemos servicios sueltos. Disenamos sistemas que conectan procesos, datos y equipos para mejorar resultados concretos."
              tone="bright"
            />
          </Reveal>
          <div className="business-solutions__grid">
            {solutions.map((solution, index) => (
              <Reveal
                className={`business-solution${solution.featured ? ' business-solution--featured' : ''}`}
                key={solution.title}
                delay={index * 0.08}
                variant="fade-up"
              >
                <span className="business-solution__index">{String(index + 1).padStart(2, '0')}</span>
                {solution.featured ? <span className="business-solution__badge">Alta demanda</span> : null}
                <h3>{solution.title}</h3>
                <dl>
                  <div>
                    <dt>Problema</dt>
                    <dd>{solution.problem}</dd>
                  </div>
                  <div>
                    <dt>Solucion</dt>
                    <dd>{solution.solution}</dd>
                  </div>
                  <div>
                    <dt>Beneficio</dt>
                    <dd>{solution.benefit}</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container tech-section">
          <Reveal variant="blur-in">
            <SectionTitle
              eyebrow="Stack tecnologico"
              title="Herramientas modernas conectadas a tu operativa"
              description="Seleccionamos tecnologia fiable, escalable y mantenible segun el contexto de cada proyecto."
            />
          </Reveal>
          <div className="tech-cloud">
            {technologies.map((technology, index) => (
              <Reveal className="tech-badge" key={technology} delay={index * 0.035} variant="scale-in">
                {technology}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--matrix">
        <div className="container process-section">
          <Reveal variant="fade-up">
            <SectionTitle
              eyebrow="Metodologia BASA"
              title="Del diagnostico a la optimizacion continua"
              description="Trabajamos con una secuencia clara para que la tecnologia no sea decorativa: debe integrarse, medirse y mejorar."
            />
          </Reveal>
          <div className="basa-timeline">
            {process.map(([number, title, text], index) => (
              <Reveal className="basa-timeline__item" key={title} delay={index * 0.06} variant="fade-up">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container automation-demo">
          <Reveal className="automation-demo__copy" variant="fade-right">
            <SectionTitle
              eyebrow="Demo visual"
              title="Asi funciona una automatizacion BASA"
              description="Un flujo sencillo puede convertir una entrada comercial en respuesta, registro y control sin depender de tareas repetitivas."
            />
          </Reveal>
          <Reveal className="automation-demo__visual" variant="scale-in" delay={0.1}>
            {demoSteps.map((step, index) => (
              <div className="demo-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--alt sector-marquee-section">
        <div className="container use-cases">
          <Reveal variant="blur-in">
            <SectionTitle
              eyebrow="Sectores y soluciones"
              title="De restaurantes a clinicas: sistemas digitales que se mueven con tu negocio"
              description="Recuperamos lo concreto: cartas QR, reservas, webs, automatizaciones, CRM y flujos de WhatsApp adaptados al tipo de empresa."
              tone="bright"
            />
          </Reveal>
          <div className="sector-marquee">
            <Marquee items={sectorMarquee} />
            <Marquee items={serviceMarquee} reverse />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container authority-section">
          <Reveal className="authority-section__copy" variant="fade-right">
            <SectionTitle
              eyebrow="Capacidad tecnica"
              title="Lo que podemos construir para tu empresa"
              description="Sistemas reales para ordenar captacion, operaciones, datos y comunicacion interna con una base tecnica profesional."
            />
          </Reveal>
          <div className="build-grid">
            {buildItems.map((item, index) => (
              <Reveal className="build-card" key={item} delay={index * 0.06} variant="scale-in">
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
