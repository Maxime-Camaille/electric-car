import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <button className={isMobile ? 'navbar-toggle active' : 'navbar-toggle'} onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={isMobile ? 'navbar-menu active' : 'navbar-menu'}>
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={toggleMenu}>
              A propos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
