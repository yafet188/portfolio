import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import './InnerPage.css'

export default function Contact() {
  return (
    <div className="inner-page">
      <Nav />
      <div className="inner-page__body">

        {/* ── Hero title ─────────────────────────────── */}
        <div className="inner-page__intro">
          <h1 className="inner-page__title">
            {'CONTACT'.split('').map((char, i) => (
              <motion.span key={i} className="inner-page__title-char" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>{char}</motion.span>
            ))}
          </h1>
        </div>

        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
