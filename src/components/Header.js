import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDevMessage, setShowDevMessage] = useState(false);

  const handleNavClick = (path) => {
    // If we're already on the page, don't do anything
    if (path === location.pathname) {
      return;
    }

    // Handle navigation based on path
    switch (path) {
      case '/about':
        navigate('/about');
        break;
      case '/projects':
        navigate('/projects');
        break;
      case '/skills':
      case '/contact':
        setShowDevMessage(true);
        break;
      default:
        navigate('/');
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
            <li onClick={() => handleNavClick('/about')}>About Me</li>
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
          <div className="dev-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dev-modal-content">
              <div className="dev-icon">🚧</div>
              <h3>Coming Soon</h3>
              <p>This feature is currently under development.</p>
              <button onClick={handleCloseModal}>Got it</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
