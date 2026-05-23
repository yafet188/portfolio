import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import './About.css'

const cs = [
  { code: 'OOP', name: 'Object-Oriented Programming',    grade: 'A'  },
  { code: 'DaS', name: 'Data Structures',                grade: 'B-' },
  { code: 'DiS', name: 'Discrete Structures',            grade: 'B'  },
]
const ux = [
  { code: 'DTF', name: 'Design Thinking I: Foundations', grade: 'A'  },
  { code: 'DIS', name: 'Design of Immersive Spaces',     grade: 'A-' },
  { code: 'UXS', name: 'User Experience Strategy',       grade: 'B+' },
]

const socials = [
  { label: 'GH', href: 'https://github.com/yafet188',                    title: 'GitHub'   },
  { label: 'FB', href: 'https://www.facebook.com/yafet.tegbaru/',        title: 'Facebook' },
  { label: 'LI', href: 'https://www.linkedin.com/in/yafet-tegbaru/',     title: 'LinkedIn' },
]

export default function About() {
  return (
    <div className="inner-page">
      <Nav />
      <div className="inner-page__body">

        {/* ── Hero title ─────────────────────────────── */}
        <div className="inner-page__intro">
          <h1 className="inner-page__title">
            {'ABOUT'.split('').map((char, i) => (
              <motion.span key={i} className="inner-page__title-char" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>{char}</motion.span>
            ))}
          </h1>
        </div>

        {/* ── Photo + Bio ────────────────────────────── */}
        <section className="about-page__top">
          <div className="about-page__image-col">
            <div className="about-page__img-holder">
              <img
                src="https://framerusercontent.com/images/YpW2C6ke2yxbdWVIkU9ozeFoaBE.jpg"
                alt="Yafet Tegbaru"
                className="about-page__photo"
              />
              <div className="about-page__img-bg">
                <div className="about-page__socials">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="about-page__social"
                      aria-label={s.title}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-page__bio-col">
            <p className="about-page__bio-main">
              I am currently pursuing a Bachelor of Science (Honours) in Computer Science
              with a Minor in User Experience (UX) Design at Wilfrid Laurier University.
              I'm in my fourth year of studies and have chosen to extend the program by an
              additional year to further deepen my understanding, gain more hands-on
              experience, and take advantage of additional learning and project opportunities
              that align with my career goals.
            </p>
            <p className="about-page__bio-sub">
              I'm passionate about blending art and technology to design visually engaging
              interfaces and enhance the overall digital experience for users.
            </p>
          </div>
        </section>

        {/* ── Course cards ───────────────────────────── */}
        <section className="about-page__courses">
          <div className="about-page__card-col">
            {cs.map(c => (
              <div key={c.code} className="course-card">
                <span className="course-card__code">{c.code}</span>
                <span className="course-card__name">{c.name}</span>
                <span className="course-card__grade">{c.grade}</span>
              </div>
            ))}
          </div>
          <div className="about-page__card-col">
            {ux.map(c => (
              <div key={c.code} className="course-card course-card--ux">
                <span className="course-card__code">{c.code}</span>
                <span className="course-card__name">{c.name}</span>
                <span className="course-card__grade">{c.grade}</span>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
