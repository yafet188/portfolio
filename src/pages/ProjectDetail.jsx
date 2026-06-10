import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import ProjCard from '../components/ProjCard'
import { projects } from '../data/projects'
import './InnerPage.css'
import './ProjectDetail.css'

const revealProps = {
  initial:   { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerReveal = (i = 0) => ({
  initial:   { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
})

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  const related = projects.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <div className="inner-page">
      <Nav />
      <div className="inner-page__body">

        {/* ── Title ──────────────────────────────────── */}
        <div className="inner-page__intro proj-detail__intro">
          <h1 className="proj-detail__title">
            {project.title.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inner-page__title-char"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* ── Metadata ───────────────────────────────── */}
        <motion.section className="proj-detail__meta" {...revealProps}>
          {[
            { label: 'Service',  value: project.service },
            { label: 'Date',     value: project.date },
            { label: 'Client',   value: project.client },
            ...(project.languages ? [{ label: 'Languages / Libraries', value: project.languages }] : []),
          ].map(item => (
            <div key={item.label} className="proj-detail__meta-item">
              <span className="proj-detail__meta-label">{item.label}</span>
              <span className="proj-detail__meta-value">{item.value}</span>
            </div>
          ))}
        </motion.section>

        {/* ── Description ────────────────────────────── */}
        <motion.section className="proj-detail__desc" {...revealProps}>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-detail__link">
              View on GitHub →
            </a>
          )}
        </motion.section>

        {/* ── Media ──────────────────────────────────── */}
        <motion.section className="proj-detail__media" {...revealProps}>
          {project.isVideo ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="proj-detail__video"
            />
          ) : (
            <img src={project.image} alt={project.title} className="proj-detail__image" />
          )}
        </motion.section>

        {/* ── Related Projects ───────────────────────── */}
        {related.length > 0 && (
          <section className="proj-detail__related">
            <div className="proj-detail__related-header">
              <span className="proj-detail__related-label">RELATED PROJECTS</span>
              <Link to="/projects" className="proj-detail__related-link">VIEW ALL PROJECTS →</Link>
            </div>
            <div className="proj-detail__related-divider" />
            <div className="proj-detail__related-grid">
              {related.map((p, i) => (
                <motion.div key={p.slug} {...staggerReveal(i)}>
                  <ProjCard project={p} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
