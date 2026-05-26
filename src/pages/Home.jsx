import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import Nav from '../components/Nav'
import Ticker from '../components/Ticker'
import SectionTitle from '../components/SectionTitle'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ProjCard from '../components/ProjCard'
import { projects } from '../data/projects'
import './Home.css'

/* ── Animation variants ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

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

/* ── Experience data ───────────────────────────────── */
const expMain = {
  company: 'MDW Group Africa',
  role: 'Director of Operations',
  period: 'April 2026 – Present',
  desc: 'Overseeing technical operations and systems infrastructure, driving process optimization and cross-functional coordination to support organizational growth.',
  img: '/img/mdw.jpeg',
  accent: 'rgba(76, 175, 80, 0.5)',
  link: 'https://mdwgroupafrica.com',
}

const expInternships = [
  {
    company: 'Webelocity',
    role: 'Frontend Developer',
    period: 'March 2024 – July 2024',
    desc: 'Developed and maintained responsive web applications using JavaScript, React, and TypeScript, enhancing user experience.',
    img: '/img/webelocity.jpeg',
    accent: 'rgba(237, 107, 104, 0.5)',
    link: 'https://webelocity.io',
  },
  {
    company: 'MDW Group Africa',
    role: 'Web Developer',
    period: 'August 2022 – May 2023',
    desc: 'Responsible for website maintenance, which involves ensuring that the website is up-to-date and functioning properly. Developed all pages to the current state using HTML and CSS.',
    img: '/img/mdw.jpeg',
    accent: 'rgba(76, 175, 80, 0.5)',
    link: 'https://mdwgroupafrica.com',
  },
]

const expVolunteer = [
  {
    company: 'Laurier Fintech',
    role: 'VP (Vice President) of Marketing',
    period: 'January 2024 – September 2025',
    desc: 'Overseeing the creation of compelling content tailored to different social media platforms (e.g., LinkedIn, Instagram). Ensuring content aligns with the company\'s brand voice and messaging. Fostering and engaging with online communities related to fintech and finance.',
    img: '/img/fintech.jpeg',
    accent: 'rgba(212, 175, 55, 0.5)',
    link: 'https://wlufintech.com',
  },
]

/* ── Courses data ──────────────────────────────────── */
const cs = [
  { code: 'OOP', name: 'Object-Oriented Programming', grade: 'A' },
  { code: 'DaS', name: 'Data Structures', grade: 'B-' },
  { code: 'DiS', name: 'Discrete Structures', grade: 'B' },
]
const ux = [
  { code: 'DTF', name: 'Design Thinking I: Foundations', grade: 'A' },
  { code: 'DIS', name: 'Design of Immersive Spaces', grade: 'A-' },
  { code: 'UXS', name: 'User Experience Strategy', grade: 'B+' },
]

export default function Home() {
  /* ── Spring-based mouse parallax (matches Framer intensity: 0.12) ── */
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 90, damping: 28, mass: 0.8 })
  const y = useSpring(rawY, { stiffness: 90, damping: 28, mass: 0.8 })

  useEffect(() => {
    const handleMouse = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      rawX.set((e.clientX - cx) * 0.12)
      rawY.set((e.clientY - cy) * 0.12)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [rawX, rawY])

  return (
    <div className="home">
      <Nav />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <motion.div
          className="hero__inner"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero__eyebrow" variants={heroItem}>
            BRINGING IDEAS INTO REALITY
          </motion.p>

          <div className="hero__name-wrap">
            <h1 className="hero__name">
              {/* Each letter of YAFET pops up from the bottom one by one */}
              <span className="hero__name-line hero__name-line--chars">
                {'YAFET'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="hero__name-char"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* TEGBARU fades in after YAFET finishes */}
              <motion.span
                className="hero__name-line hero__name-line--offset"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.7 }}
              >
                TEGBARU
              </motion.span>
            </h1>

            {/* Photo pops in from small to full size after names */}
            <motion.div
              className="hero__photo-parallax"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 2, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="hero__photo">
                <img src="/img/portfolio.jpg" alt="Yafet Tegbaru" />
              </div>
            </motion.div>
          </div>

          <motion.p className="hero__bio" variants={heroItem}>
            I'm Yafet Tegbaru — a passionate designer and a WLU alumnus with a background in Computer Science and UX Design. I am
            dedicated to creating meaningful digital experiences for people.
          </motion.p>

          <motion.div className="hero__scroll" variants={heroItem}>
            <div className="hero__scroll-bar">
              <div className="hero__scroll-fill" />
            </div>
            <span className="hero__scroll-label">SCROLL</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TICKER 1 ─────────────────────────────────── */}
      <div className="home__ticker">
        <Ticker />
      </div>

      {/* ── EXPERIENCE ───────────────────────────────── */}
      <section className="home__section" id="experience">
        <SectionTitle label="EXPERIENCE" to="/experience" />

        <div className="home-exp__grid">
          {/* Main experience */}
          <motion.div className="home-exp__featured" {...staggerReveal(0)}>
            <a href={expMain.link} target="_blank" rel="noopener noreferrer" className="home-exp__img-wrap">
              <div className="home-exp__img-accent" style={{ background: expMain.accent }} />
              <img src={expMain.img} alt={expMain.company} className="home-exp__img" />
            </a>
            <div className="home-exp__header">
              <p className="home-exp__role home-exp__role--vivid">{expMain.role}</p>
              <span className="home-exp__period">{expMain.period}</span>
            </div>
            <a href={expMain.link} target="_blank" rel="noopener noreferrer" className="home-exp__company home-exp__company--vivid">{expMain.company}</a>
            <p className="home-exp__desc">{expMain.desc}</p>
          </motion.div>

          {/* Internships */}
          <motion.div className="home-exp__sublabel" {...revealProps}>INTERNSHIPS</motion.div>
          {expInternships.map((exp, i) => (
            <motion.div key={exp.company + exp.period} className="home-exp__featured" {...staggerReveal(i)}>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="home-exp__img-wrap">
                <div className="home-exp__img-accent" style={{ background: exp.accent }} />
                <img src={exp.img} alt={exp.company} className="home-exp__img" />
              </a>
              <div className="home-exp__header">
                <p className="home-exp__role">{exp.role}</p>
                <span className="home-exp__period">{exp.period}</span>
              </div>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="home-exp__company">{exp.company}</a>
              <p className="home-exp__desc">{exp.desc}</p>
            </motion.div>
          ))}

          {/* Volunteer */}
          <motion.div className="home-exp__sublabel" {...revealProps}>VOLUNTEER</motion.div>
          {expVolunteer.map((exp, i) => (
            <motion.div key={exp.company} className="home-exp__featured" {...staggerReveal(i)}>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="home-exp__img-wrap">
                <div className="home-exp__img-accent" style={{ background: exp.accent }} />
                <img src={exp.img} alt={exp.company} className="home-exp__img" />
              </a>
              <div className="home-exp__header">
                <p className="home-exp__role">{exp.role}</p>
                <span className="home-exp__period">{exp.period}</span>
              </div>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="home-exp__company">{exp.company}</a>
              <p className="home-exp__desc">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section className="home__section" id="projects">
        <SectionTitle label="PROJECTS" to="/projects" />
        <motion.p className="home__projects-sub" {...revealProps}>
          Click on any of the projects below to see what I've accomplished and what I'm currently working on!
        </motion.p>
        <div className="home-proj__grid">
          {projects.map((p, i) => (
            <motion.div key={p.slug} {...staggerReveal(i)}>
              <ProjCard project={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className="home__section" id="about">
        <SectionTitle label="ABOUT" to="/about" />
        <div className="home-about__content">
          <div className="home-about__bio">
            <motion.p className="home-about__bio-large" {...revealProps}>
              I have pursued a BSc (Honours) in Computer Science with a Minor in UX Design
              from Wilfrid Laurier University. I am currently working as an Operations & Systems Engineer at MDW Group Africa,
              where I oversee technical operations and systems infrastructure, driving process optimization and cross-functional
              coordination to support organizational growth.
            </motion.p>
            <motion.p
              className="home-about__bio-small"
              {...revealProps}
              transition={{ ...revealProps.transition, delay: 0.12 }}
            >
              I'm passionate about blending art and technology to design visually engaging
              interfaces and enhance the overall digital experience for users.
            </motion.p>
          </div>

          <div className="home-about__courses">
            {[{ title: 'Computer Science', items: cs }, { title: 'UX Design', items: ux }].map(col => (
              <div key={col.title} className="home-about__col">
                {col.items.map((c, i) => (
                  <motion.div key={c.code} className="course-card" {...staggerReveal(i)}>
                    <span className="course-card__code">{c.code}</span>
                    <span className="course-card__name">{c.name}</span>
                    <span className="course-card__grade">{c.grade}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <div className="home__contact-wrap">
        <ContactSection />
      </div>

      {/* ── FOOTER ───────────────────────────────────── */}
      <Footer />
    </div>
  )
}
