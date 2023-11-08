import "./styles.css";
import Logo from "../../assets/images/Bornstall.png";
import React, {useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="logo">Logo du site</div>
        <p className="marketing-phrase">Phrase marketing</p>
        <p className="copyright">© Bornstall Tous droits réservés 2023</p>
      </div>
      <div className="footer-column">
        <h2 className="section-title">Service</h2>
        <ul className="links-list">
          <li><a className="footer-link" href="#">Nos Bornes de recharges</a></li>
          <li><a className="footer-link" href="#">Installation</a></li>
          <li><a className="footer-link" href="#">Simulateur</a></li>
          <li><a className="footer-link" href="#">Devis</a></li>
          <li><a className="footer-link" href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 className="section-title">Informations</h2>
        <ul className="links-list">
          <li><a className="footer-link" href="#">Mentions légales</a></li>
          <li><a className="footer-link" href="#">Conditions générales de ventes</a></li>
          <li><a className="footer-link" href="#">Politique de confidentialité</a></li>
          <li><a className="footer-link" href="#">Qui sommes nous</a></li>
          <li><a className="footer-link" href="#">Blog</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
