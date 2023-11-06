import React from "react";
import "./styles.css";
import installateur from "../../assets/images/Installateur.png";
import borne from "../../assets/images/borneDeRechargeElectrique.svg";
import devis from "../../assets/images/devis.svg";
import enveloppe from "../../assets/images/enveloppe.svg";

const ServiceProcess = () => {
  return (
    <section className='service-process'>
      <h5 className='service-process__title'>Comment cela fonctionne ?</h5>
      <div className='service-process__wrapper'>
        <div className='content-wrapper'>
          <div className='paragraph'>
            <h6 className='paragraph-title'>
              <img
                className='icon'
                src={enveloppe}
                alt='enveloppe-representant-un-mail'
              ></img>
              Prise de contact
            </h6>
            <p className='paragraph-content'>
              Remplissez simplement notre formulaire de contact, et notre équipe
              vous rappellera rapidement. Nous serons à votre disposition pour
              répondre à toutes vos questions.
            </p>
          </div>
          <div className='paragraph'>
            <h6 className='paragraph-title'>
              <img
                className='icon'
                src={devis}
                alt='papier-avec-ligne-ecriture-representant-un-devis'
              ></img>
              Analyse de votre besoin
            </h6>
            <p className='paragraph-content'>
              Chaque projet est unique. Notre équipe analysera vos besoins
              spécifiques pour concevoir la solution idéale de recharge et
              établir un devis sur mesure.
            </p>
          </div>
          <div className='paragraph'>
            <h6 className='paragraph-title'>
              <img
                className='icon'
                src={borne}
                alt='borne-de-recharge-electrique'
              ></img>
              Pose de votre borne
            </h6>
            <p className='paragraph-content'>
              Confiez l'installation de votre borne de recharge à notre équipe
              d'experts locaux, certifiés IRVE. Bénéficiez d'une installation
              sécurisée graçe à des professionnels qualifiés.
            </p>
          </div>
          <button className='request-button'>Demander un devis</button>
        </div>
        <div className='image-wrapper'>
          <img src={installateur} alt='deux technicien installant une borne de recharge chez un client possédant une voiture électrique' />
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
