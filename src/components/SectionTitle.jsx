import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './SectionTitle.css'

export default function SectionTitle({ label, to }) {
  const navigate = useNavigate()
  return (
    <motion.div className="section-title" initial="rest" whileHover="hover" animate="rest">

      <motion.span
        className="section-title__label"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        variants={{
          rest:  { opacity: 1 },
          hover: { opacity: 1, transition: { duration: 0.25 } },
        }}
      >
        {to ? <Link to={to} className="section-title__label-link">{label}</Link> : label}
      </motion.span>

      {/* Line with vivid sweep on hover */}
      <div
        className="section-title__line-wrap"
        style={{ cursor: to ? 'pointer' : 'default' }}
        onClick={to ? () => navigate(to) : undefined}
      >
        <motion.div
          className="section-title__line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="section-title__line-vivid"
          variants={{
            rest:  { scaleX: 0 },
            hover: { scaleX: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
          }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {to && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          variants={{
            rest:  { x: 0,  opacity: 1 },
            hover: { x: 6, opacity: 1, transition: { duration: 0.25 } },
          }}
        >
          <Link to={to} className="section-title__link">
            View All →
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}
