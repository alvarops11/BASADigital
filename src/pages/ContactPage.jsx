import ContactForm from '../components/ContactForm'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'

const reasons = [
  'Detectar donde se esta perdiendo conversion o claridad.',
  'Definir una solucion razonable para el tipo de comercio.',
  'Ordenar reservas, formularios, captacion o imagen digital.',
]

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Un sistema visual hecho para vender mejor"
        description="Si ya sabes lo que necesitas o solo detectas que la presencia digital del negocio no acompana, cuentanos el contexto y planteamos el siguiente paso."
        kicker="Arranque del proyecto"
      />
      <section className="page-section">
        <div className="container contact-layout">
          <Reveal className="contact-layout__aside">
            <p className="section-title__eyebrow">Punto de entrada</p>
            <h2>Que puedes plantearnos</h2>
            <ul>
              {reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="contact-layout__badge">
              <span>Respuesta inicial</span>
              <strong>Enfocada al negocio</strong>
            </div>
          </Reveal>
          <Reveal className="contact-layout__form-wrap" delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
