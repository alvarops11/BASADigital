import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import CursorGlow from './components/CursorGlow'
import Footer from './components/Footer'
import Header from './components/Header'
import HelpChatFloat from './components/HelpChatFloat'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloat from './components/WhatsAppFloat'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))

export default function App() {
  return (
    <div className="site-shell">
      <CursorGlow />
      <div className="grid-overlay" aria-hidden="true" />
      <ScrollToTop />
      <Header />
      <HelpChatFloat />
      <WhatsAppFloat />
      <main>
        <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/soluciones" element={<SolutionsPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
