import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p>&copy; 2024 KiiBoard.inc. All rights reserved.</p>
        <ul className="footerLinks">
          <li className="footerLink"><Link to="/privacy-policy" className="link">Privacy Policy</Link></li>
          <li className="footerLink"><Link to="/terms-of-service" className="link">Terms of Service</Link></li>
          <li className="footerLink"><Link to="/contact" className="link">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

  