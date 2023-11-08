import "./styles.css";
import LogoFooter from "../../assets/images/LogoFooter.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <img src={LogoFooter} alt="Logo Bornstall" className="footer-logo" />
          <p className="marketing-phrase">
            L'avenir électrique pour un monde en mouvement
          </p>
        </div>
        <div className="footer-column">
          <h2 className="footer-column-title">Service</h2>
          <ul className="links-list">
            <li>
              <a className="footer-link" href="#">
                Nos Bornes de recharges
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Installation
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Simulateur
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Devis
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h2 className="footer-column-title">Informations</h2>
          <ul className="links-list">
            <li>
              <a className="footer-link" href="#">
                Mentions légales
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Conditions générales de ventes
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Qui sommes nous
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column newsletter">
          <h2 className="footer-column-title">
            La Newsletter Qui Fait Rouler l'Avenir
          </h2>
          <p className="newsletter-text">
            Rejoignez notre newsletter pour rester informé sur les dernières
            avancées de l'installation de bornes électriques. Soyez à
            l'avant-garde de la mobilité électrique.
          </p>
          <div className="newsletter-subscribe">
            <input type="email" placeholder="Entrez votre adresse e-mail" />
            <button>M'abonner</button>
          </div>
          <p className="unsubscribe-text">
            Vous pouvez vous désabonner à tout moment. Nous respectons votre
            vie privée.{" "}
            <a href="#">En savoir plus sur notre politique de protection des données.</a>
          </p>
        </div>
      </div>
      <div className="footer-column copyright">
        <p className="copyright">© Bornstall Tous droits réservés 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
