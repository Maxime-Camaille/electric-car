import React from "react";
import "./styles.css";
import certifiedIcon from "../../assets/images/certifiedIcon.png";
import irve from "../../assets/images/irve.png";
import qualifelec from "../../assets/images/qualifelec.png";

const EVChargingGrants = () => {
  return (
    
    <section className='certified-installers-section'>
      
      <div className='certified-installers-container'>
        <div className='certified-icon'>
          <img src={certifiedIcon} alt='Certified Icon' />
        </div>
        <h2 className='section-certified-installers-title'>
          <span className='greenAccentuation'>Installateurs Certifiés :</span>{" "}
          Confiance Assurée
        </h2>
        <p className='section-certified-installers-text'>
        <strong>Chez Bornstall, nos installateurs certifiés apportent une expertise de
          qualité dans l'installation de bornes de recharge pour véhicules
          électriques.</strong>
          <br />
          <br />
          Notre mission est de simplifier le processus d'installation pour vous.
          Nous prenons en charge l'intégralité de votre projet, de la première
          consultation à la mise en service, en passant par la gestion de la
          paperasse administrative. Vous pouvez avoir <strong>confiance</strong> en notre
          capacité à fournir une <strong>installation de qualité, fiable et conforme aux normes en vigueur.</strong> 
          <br />
          <br />
          Que vous soyez un
          particulier souhaitant charger votre <strong>véhicule électrique</strong> à domicile ou
          une entreprise cherchant à offrir un <strong>service de recharge</strong> à vos
          employés et clients, <strong>Bornstall</strong> est là pour répondre à vos besoins.
          
        </p>
        <div className='logo-grid'>
          <div className='logo-box'>
            <img src={irve} alt='Logo-installateur-qualifié-IRVE' />
            <p className='logo-text'>Toutes nos bornes de recharge électrique sont installées par des électriciens disposant de la qualification en IRVE (Infrastructure pour la Recharge de Véhicules Électriques et hybrides rechargeables).</p>
          </div>
          <div className='logo-box'>
            <img src={qualifelec} alt='Logo-qualifelec' />
            <p className='logo-text'>En choisissant une entreprise qualifiée Qualifelec pour l’installation de bornes de recharges de véhicules électriques, vous êtes assuré que votre installateur est correctement formé, compétent et expérimenté.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVChargingGrants;
