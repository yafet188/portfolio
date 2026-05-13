import { Link } from 'react-router-dom'
import './ProjCard.css'

export default function ProjCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="proj-card">
      <img src={project.featuredImage} alt={project.title} className="proj-card__img" />
      <div className="proj-card__overlay" />
      <span className="proj-card__status">{project.status}</span>
      <div className="proj-card__content">
        <span className="proj-card__name">{project.title}</span>
      </div>
    </Link>
  )
}
