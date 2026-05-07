import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__top">

          {/* Brand box */}
          <div className="footer__brand">
            <span className="footer__brand-name">YAFET<br />TEGBARU</span>
            <span className="footer__brand-tagline">Bringing ideas into reality.</span>
          </div>

          {/* Link columns */}
          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__col-title">Navigation</span>
              <Link to="/#experience" className="footer__col-link">Experience</Link>
              <Link to="/#projects"   className="footer__col-link">Projects</Link>
              <Link to="/#about"      className="footer__col-link">About</Link>
              <Link to="/#contact"    className="footer__col-link">Contact</Link>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">Connect</span>
              <a href="https://www.linkedin.com/in/yafet-tegbaru/" target="_blank" rel="noreferrer" className="footer__col-link">LinkedIn</a>
              <a href="https://github.com/yafet188"                 target="_blank" rel="noreferrer" className="footer__col-link">GitHub</a>
              <a href="https://behance.net/yafettegbaru"            target="_blank" rel="noreferrer" className="footer__col-link">Behance</a>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">Contact</span>
              <a href="mailto:tegbaruyafet18@gmail.com" className="footer__col-link">Email</a>
              <span className="footer__col-text">Kitchener, ON, CA</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="footer__icons">
            <a href="https://github.com/yafet188"                 target="_blank" rel="noreferrer" className="footer__icon" aria-label="GitHub">GH</a>
            <a href="https://www.linkedin.com/in/yafet-tegbaru/" target="_blank" rel="noreferrer" className="footer__icon" aria-label="LinkedIn">in</a>
            <a href="https://behance.net/yafettegbaru"            target="_blank" rel="noreferrer" className="footer__icon" aria-label="Behance">Be</a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span>Designed &amp; Developed by Yafet Tegbaru</span>
          <span>© 2026 Yafet Tegbaru. All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}
