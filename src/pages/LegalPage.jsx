import PageIntro from '../components/PageIntro'

const sections = [
  {
    title: 'Responsable del sitio',
    text: '[NOMBRE DE LA PERSONA RESPONSABLE]',
  },
  {
    title: 'Marca/proyecto',
    text: 'BASA Digital',
  },
  {
    title: 'Email de contacto',
    text: '[EMAIL DE CONTACTO]',
  },
  {
    title: 'Ubicacion',
    text: '[CIUDAD/PAIS]',
  },
  {
    title: 'Actividad',
    text: 'servicios digitales para comercios',
  },
]

export default function LegalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Informacion legal"
        description="Base legal adaptada a una marca/proyecto de servicios digitales para comercios, sin inventar datos societarios ni fiscales."
        kicker="Marco base"
      />
      <section className="page-section">
        <div className="container legal-layout">
          {sections.map((section) => (
            <article key={section.title} className="legal-card">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
          <article className="legal-card legal-card--note">
            <h2>Nota importante</h2>
            <p>
              BASA Digital es una marca/proyecto de servicios digitales. Los datos legales
              definitivos deberan completarse cuando corresponda.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
