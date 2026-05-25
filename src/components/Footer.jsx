import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const footerLinks = [
  { label: 'Soluciones', to: '/soluciones' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Informacion legal', to: '/legal' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__shell">
        <Reveal variant="fade-up">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <span className="site-footer__eyebrow">BASA Digital</span>
              <p>
                Marca/proyecto de soluciones digitales para comercios que necesitan una presencia
                mas clara, operativa y comercial.
              </p>
            </div>
            <div className="site-footer__links">
              {footerLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="site-footer__bottom">
          <p>BASA Digital es una marca/proyecto, no una sociedad constituida.</p>
          <p>© 2026 BASA Digital</p>
        </div>
      </div>
    </footer>
  )
}
