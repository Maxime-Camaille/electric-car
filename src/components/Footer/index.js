import "./styles.css";
import LogoFooter from "../../assets/images/LogoFooter.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-columns'>
        <div className='footer-column'>
          <h2 className='footer-column-title'>Service</h2>
          <ul className='links-list'>
            <li>
              <a className='footer-link' href='#'>
                <span>Nos bornes de recharges</span>
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <span>Nos offres pour particulier</span>
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <span>Simulateur</span>
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <span>Obtenir un devis</span>
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <span>Nos articles</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-column'>
          <h2 className='footer-column-title'>Informations</h2>
          <ul className='links-list'>
            <li>
              <a className='footer-link' href='#'>
                <span>Mentions légales</span>
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <span>Conditions générales de ventes</span>
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <span>Politique de confidentialité</span>
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <span>Qui sommes nous</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-column newsletter'>
          <h2 className='footer-column-title'>
            La Newsletter Qui Fait Rouler l'Avenir
          </h2>
          <p className='newsletter-text'>
            Soyez à l'avant-garde de la mobilité électrique.
          </p>
          <div className='newsletter-subscribe'>
            <input type='email' placeholder='E-mail' />
            <button className='subscribe-newsletter-button'>M'abonner</button>
          </div>
          <p className='unsubscribe-text'>
            Vous pouvez vous désabonner à tout moment. Nous respectons votre vie
            privée. Afin d'en savoir plus sur notre politique de protection des
            données, <a href='#'>cliquez-ici.</a>
          </p>
        </div>
      </div>
      <div className='footer-column-copyright'>
      <Link
          to='/'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='logo'
        >
          <img src={LogoFooter} alt='logo-of-the-website' className='footer-logo' />
        </Link>
          <p className='marketing-phrase'>
            L'avenir électrique pour un monde en mouvement
          </p>
      </div>
      <p className='copyright'>© Bornstall Tous droits réservés 2023</p>
    </footer>
  );
}

export default Footer;
