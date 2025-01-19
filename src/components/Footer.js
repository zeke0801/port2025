import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} DreamTek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
