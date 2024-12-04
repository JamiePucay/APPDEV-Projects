import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
        <li className="navItem"><Link to="/company-profile" className="navLink">Company Profile</Link></li>
        <li className="navItem"><Link to="/products" className="navLink">Products</Link></li>
        <li className="navItem"><Link to="/developer" className="navLink">Developer</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
