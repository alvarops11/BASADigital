import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Soluciones', to: '/soluciones' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: -24 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={reduceMotion ? undefined : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="site-nav shell container" aria-label="Principal">
        <Link to="/" aria-label="Inicio BASA Digital" className="site-nav__brand" onClick={closeMenu}>
          <img src="/BASA DIGITAL/Logo.png" alt="BASA Digital" width="126" height="62" />
        </Link>
        <button
          type="button"
          className="site-nav__toggle"
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className={`site-nav__hamburger${isOpen ? ' is-open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
        <div id="site-menu" className={`site-nav__links${isOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button--primary site-nav__cta" to="/contacto" onClick={closeMenu}>
            Diagnostico gratis
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
