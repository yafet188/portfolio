import SectionTitle from './SectionTitle'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <SectionTitle label="CONTACT" to="/contact" />

      <div className="contact-section__grid">
        <div className="contact-section__left">
          <p className="contact-section__blurb">
            Interested in collaborating or want to chat about my work? Feel free to
            reach out—I'm always open to new opportunities and conversations!
          </p>
          <div className="contact-section__details">
            <span>Kitchener, ON, CA</span>
            <a href="mailto:tegbaruyafet18@gmail.com">tegbaruyafet18@gmail.com</a>
            <a href="https://yafetegbaru.com" target="_blank" rel="noreferrer">www.yafetegbaru.com</a>
          </div>
        </div>

        <form className="contact-section__form" onSubmit={e => e.preventDefault()}>
          <div className="contact-section__row">
            <div className="contact-section__field">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="contact-section__field">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="contact-section__field">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message..." />
          </div>
          <button type="submit" className="contact-section__submit">Send Message</button>
        </form>
      </div>

    </section>
  )
}
