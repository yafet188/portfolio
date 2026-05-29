import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import './InnerPage.css'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="inner-page">
      <Nav />
      <main className="notfound">
        <h1 className="notfound__code">404</h1>
        <p className="notfound__msg">This page doesn't exist.</p>
        <Link to="/" className="notfound__back">← Back to home</Link>
      </main>
    </div>
  )
}
