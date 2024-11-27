
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/games" className="nav-link">Games</Link>
        </li>
      </ul>
    </nav>
  )
}
