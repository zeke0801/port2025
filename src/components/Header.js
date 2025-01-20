import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [showDevMessage, setShowDevMessage] = useState(false);

  const handleNavClick = (path) => {
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path !== location.pathname) {
      setShowDevMessage(true);
    }
  };

  const handleCloseModal = () => {
    setShowDevMessage(false);
  };

  const handleEmailCopy = (e) => {
    navigator.clipboard.writeText('jlbetito0801@gmail.com');
    const btn = e.target;
    const originalText = btn.textContent;
    btn.textContent = 'Email Copied!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  };

  return (
    <>
      <div className="nav-section">
        <nav>
          <ul>
            <li onClick={() => handleNavClick('/')}>About Me</li>
            <li onClick={() => handleNavClick('/skills')}>Skills</li>
            <li onClick={() => handleNavClick('/projects')}>Projects</li>
            <li onClick={() => handleNavClick('/contact')}>Contact</li>
          </ul>
          <button className="footer-button" onClick={handleEmailCopy}>
            Send Email
          </button>
        </nav>
      </div>

      {/* Development Message Modal */}
      {showDevMessage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="dev-message" onClick={(e) => e.stopPropagation()}>
            <h3>Sorry, Still Under Development!</h3>
            <button className="close-button" onClick={handleCloseModal}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
