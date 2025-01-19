import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <span className="dream">W</span>
            <span className="tek">olf</span>
          </Link>
        </div>
        <nav className="navigation">
          <Link to="/about" className={isActive('/about')}>About Me</Link>
          <Link to="/experience" className={isActive('/experience')}>Work Experience</Link>
          <Link to="/certifications" className={isActive('/certifications')}>Certifications</Link>
          <Link to="/projects" className={isActive('/projects')}>Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
