import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ContactSection from '../components/ContactSection'
import './InnerPage.css'
import './Experience.css'

const expMain = {
  company: 'MDW Group Africa',
  role:    'Director of Operations',
  period:  'April 2026 – Present',
  desc:    'Overseeing technical operations and systems infrastructure, driving process optimization and cross-functional coordination to support organizational growth.',
  img:     '/img/mdw.jpeg',
  accent:  'rgba(76, 175, 80, 0.5)',
  link:    'https://mdwgroupafrica.com',
}

const expInternships = [
  {
    company: 'Webelocity',
    role:    'Frontend Developer',
    period:  'March 2024 – July 2024',
    desc:    'Developed and maintained responsive web applications using JavaScript, React, and TypeScript, enhancing user experience.',
    img:     '/img/webelocity.jpeg',
    accent:  'rgba(237, 107, 104, 0.5)',
    link:    'https://webelocity.io',
  },
  {
    company: 'MDW Group Africa',
    role:    'Web Developer',
    period:  'August 2022 – May 2023',
    desc:    'Responsible for website maintenance, which involves ensuring that the website is up-to-date and functioning properly. Developed all pages to the current state using HTML and CSS.',
    img:     '/img/mdw.jpeg',
    accent:  'rgba(76, 175, 80, 0.5)',
    link:    'https://mdwgroupafrica.com',
  },
]

const expVolunteer = [
  {
    company: 'Laurier Fintech',
    role:    'VP (Vice President) of Marketing',
    period:  'January 2024 – September 2025',
    desc:    "Overseeing the creation of compelling content tailored to different social media platforms (e.g., LinkedIn, Instagram). Ensuring content aligns with the company's brand voice and messaging. Fostering and engaging with online communities related to fintech and finance.",
    img:     '/img/fintech.jpeg',
    accent:  'rgba(212, 175, 55, 0.5)',
    link:    'https://wlufintech.com',
  },
]

const revealProps = (i = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
})

function ExpCard({ exp, vivid, index }) {
  return (
    <motion.div className="exp-page__card" {...revealProps(index)}>
      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="exp-page__img-wrap">
        <div className="exp-page__img-accent" style={{ background: exp.accent }} />
        <img src={exp.img} alt={exp.company} className="exp-page__img" />
      </a>
      <div className="exp-page__header">
        <p className={`exp-page__role${vivid ? ' exp-page__role--vivid' : ''}`}>{exp.role}</p>
        <span className="exp-page__period">{exp.period}</span>
      </div>
      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="exp-page__company">
        {exp.company}
      </a>
      <p className="exp-page__desc">{exp.desc}</p>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <div className="inner-page">
      <Nav />
      <div className="inner-page__body">

        <div className="inner-page__intro">
          <h1 className="inner-page__title">
            {'EXPERIENCE'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inner-page__title-char"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        <section className="exp-page">
          <div className="exp-page__grid">
            <ExpCard exp={expMain} vivid index={0} />

            <motion.div className="exp-page__sublabel" {...revealProps()}>INTERNSHIPS</motion.div>
            {expInternships.map((exp, i) => (
              <ExpCard key={exp.company + exp.period} exp={exp} index={i} />
            ))}

            <motion.div className="exp-page__sublabel" {...revealProps()}>VOLUNTEER</motion.div>
            {expVolunteer.map((exp, i) => (
              <ExpCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </section>

        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
