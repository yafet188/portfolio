import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import ProjCard from '../components/ProjCard'
import { projects } from '../data/projects'
import './InnerPage.css'
import './Projects.css'

const staggerReveal = (i = 0) => ({
  initial:   { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
})

export default function Projects() {
  return (
    <div className="inner-page">
      <Nav />
      <div className="inner-page__body">

        {/* ── Hero title ─────────────────────────────── */}
        <div className="inner-page__intro">
          <h1 className="inner-page__title">
            {'PROJECTS'.split('').map((char, i) => (
              <motion.span key={i} className="inner-page__title-char" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>{char}</motion.span>
            ))}
          </h1>
        </div>

        {/* ── Projects grid ──────────────────────────── */}
        <section className="projects-page">
          <div className="projects-page__grid">
            {projects.map((p, i) => (
              <motion.div key={p.slug} {...staggerReveal(i)}>
                <ProjCard project={p} />
              </motion.div>
            ))}
          </div>
        </section>

        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
