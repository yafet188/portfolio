import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoAnimator from './LogoAnimator'
import './Nav.css'

const links = [
  { label: 'Experience', to: '/experience' },
  { label: 'Projects',   to: '/projects'   },
  { label: 'About',      to: '/about'      },
  { label: 'Contact',    to: '/contact'    },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        {/* Left: nav links */}
        <nav className="nav__links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Centre: logo */}
        <Link to="/" className="nav__logo" aria-label="Home">
          <LogoAnimator />
        </Link>

        {/* Right: resume button */}
        <div className="nav__right">
          <a
            href="/resume.pdf"
            download
            className="nav__resume-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className="nav__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="/resume.pdf" download className="nav__mobile-resume">
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
