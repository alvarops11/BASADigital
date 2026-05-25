import CTASection from '../components/CTASection'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/team'

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nosotros"
        title="La parte tecnica y la parte comercial deben moverse a la vez"
        description="BASA Digital une criterio visual, implantacion tecnica y enfoque de negocio para que la solucion tenga sentido completo."
        kicker="Perfil operativo"
      />
      <section className="page-section">
        <div className="container about-stack">
          <Reveal className="about-stack__lead">
            <SectionTitle
              eyebrow="Como trabajamos"
              title="La historia no empieza en dos tarjetas. Empieza en una forma de intervenir el negocio"
              description="Primero se explica el enfoque: una sola direccion para la parte visual, la implantacion tecnica y la lectura comercial. Despues se baja a los perfiles que sostienen esa forma de trabajar."
            />
          </Reveal>

          <Reveal className="about-stack__summary" delay={0.06}>
            <div>
              <span>Direccion</span>
              <strong>Diagnostico, diseño y puesta en marcha conectados</strong>
            </div>
            <div>
              <span>Objetivo</span>
              <strong>Que la presencia digital tenga impacto real en el negocio</strong>
            </div>
            <div>
              <span>Metodo</span>
              <strong>Decisiones sobrias, mantenimiento claro y foco comercial</strong>
            </div>
          </Reveal>

          <section className="team-showcase">
            <SectionTitle
              eyebrow="Perfiles"
              title="Dos roles distintos trabajando sobre la misma pieza"
              description="La parte de producto y la parte comercial se refuerzan entre si para que la solucion no se quede a medias."
            />
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.08}>
                  <TeamCard member={member} />
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </section>
      <CTASection />
    </>
  )
}
