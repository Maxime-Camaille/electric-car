import "./styles.css";
import Logo from "../../assets/images/Bornstall.png";
import React, {useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  

  window.addEventListener("scroll", changeBackground);

  return (
    <header className='header'>
      <nav className={navBar ? "NavBar active" : "NavBar"}>
        <Link
          to='/'
          className='logo'
        >
          <img decoding='async' src={Logo} alt='logo-of-the-website' />
        </Link>
        <div
          class={`hamburger ${showLinks ? "toggle" : ""}`}
          onClick={handleShowLinks}
        >
          <div className='bars1'></div>
          <div className='bars2'></div>
          <div className='bars3'></div>
        </div>
        <ul class={`nav-links${showLinks ? " open" : ""}`}>
          <li className={`${showLinks ? "fade" : ""}`}>
            <Link to='/' onClick={handleShowLinks}>
              Accueil
            </Link>
          </li>
          <li className={`${showLinks ? "fade" : ""}`}>
            <Link to='/services' onClick={handleShowLinks}>
              Nos Services
            </Link>
          </li>
          <li className={`${showLinks ? "fade" : ""}`}>
            <Link to='cv' onClick={handleShowLinks}>
              FAQ
            </Link>
          </li>
          <li className={`${showLinks ? "fade" : ""}`}>
            <Link to='' onClick={handleShowLinks}>
              À propos
            </Link>
          </li>
          <li className={`${showLinks ? "fade" : ""}`}>
            <Link to='' onClick={handleShowLinks}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
