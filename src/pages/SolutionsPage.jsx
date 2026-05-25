import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import SplineSolutionCard from '../components/SplineSolutionCard'
import { solutionExperiences } from '../data/solutions'

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Soluciones"
        title="Experiencias visuales para vender soluciones digitales con mas presencia"
        description="La pagina pasa a un formato de lista vertical, una solucion por fila, con escenas 3D y una lectura mas clara de cada propuesta."
        kicker="Soluciones 3D"
      />

      <section className="page-section">
        <div className="container solutions-stack">
          <Reveal className="solutions-stack__intro" variant="fade-up">
            <p className="section-title__eyebrow">Lista de soluciones</p>
            <h2>Una sola solucion por fila, con mas presencia y menos ruido visual</h2>
            <p>
              Cada bloque combina mensaje comercial, escena 3D y un CTA directo para que la
              lectura de la pagina sea mas potente y mas facil de ampliar con nuevas piezas.
            </p>
          </Reveal>

          <div className="solutions-stack__list">
            {solutionExperiences.map((solution, index) => (
              <SplineSolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
