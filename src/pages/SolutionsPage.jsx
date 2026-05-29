import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import SolutionCard from '../components/SolutionCard'
import SplineSolutionCard from '../components/SplineSolutionCard'
import { solutionExperiences, solutions } from '../data/solutions'

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Soluciones"
        title="Soluciones digitales para comercios que quieren captar y operar mejor"
        description="Aqui vive el detalle: webs, cartas QR, reservas, automatizaciones, chatbots, catalogos, inmobiliarias y sistemas de pedidos."
        kicker="Servicios BASA"
      />

      <section className="page-section">
        <div className="container solutions-stack">
          <Reveal className="solutions-stack__intro" variant="fade-up">
            <p className="section-title__eyebrow">Lista de soluciones</p>
            <h2>Soluciones visuales con tecnologia aplicada al negocio</h2>
            <p>
              La pagina principal se mantiene visual. En esta pagina puedes revisar las soluciones
              concretas, entender que problema resuelven y consultar la que encaje con tu negocio.
            </p>
          </Reveal>

          <div className="solutions-stack__list">
            {solutionExperiences.map((solution, index) => (
              <SplineSolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="container solutions-stack">
          <Reveal className="solutions-stack__intro" variant="fade-up">
            <p className="section-title__eyebrow">Servicios indexados</p>
            <h2>Webs, reservas, cartas QR y automatizaciones en un solo sitio</h2>
            <p>
              Cada solucion esta pensada para una accion concreta: captar mas clientes, ordenar
              solicitudes, reducir tareas manuales o mejorar la experiencia digital del negocio.
            </p>
          </Reveal>

          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <Reveal key={solution.title} delay={index * 0.04} variant="scale-in">
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
