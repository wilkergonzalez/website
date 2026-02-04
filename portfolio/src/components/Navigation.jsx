import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useVisitorCount } from '../hooks/useVisitorCount';
import '../styles/navbar.css';

const Navigation = () => {
  const location = useLocation();
  const { loading, formattedCount } = useVisitorCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="#main" className="skip-link">Skip to main content</a>
      <nav className="modern-navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-left">
          <Link to="/" className="nav-logo" aria-label="Homepage">
            Wilker Gonzalez
          </Link>
        </div>
        
        <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <ul className="nav-links" role="menubar">
            <li role="none">
              <Link 
                to="/" 
                className="nav-link"
                role="menuitem"
                aria-current={location.pathname === '/' ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link 
                to="/projects" 
                className="nav-link"
                role="menuitem"
                aria-current={location.pathname === '/projects' ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li role="none">
              <Link 
                to="/contact" 
                className="nav-link"
                role="menuitem"
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="navbar-right">
          <div className="visitor-badge" aria-live="polite">
            {loading ? (
              'Loading...'
            ) : (
              `${formattedCount} visitors`
            )}
          </div>
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu" 
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;