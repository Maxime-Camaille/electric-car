import React from "react";
import "./styles.css";
import simulateurCharge from "../../assets/images/simulateur_chargement.png";

const EVChargingTime = () => {
  return (
    <section className='charging-time-section'>
      <div className='left-div'>
        <h3 className='section-title'>
          Quelle est la <span className='greenAccentuation'>durée</span>{" "}
          nécessaire pour <span className='greenAccentuation'>recharger</span>{" "}
          ma batterie ?
        </h3>
        <hr className='section-divider' />
        <ul className='charging-time-list'>
          <li>
             Le temps de charge varie selon la capacité de la batterie.
          </li>
          <li>
             La puissance de la borne affecte également la durée.
          </li>
          <li>
            Utilisez notre simulateur pour estimer le temps de recharge adapté.
          </li>
        </ul>
      </div>
      <div className='right-div'>
        <img
          src={simulateurCharge}
          alt='Image de recharge de véhicule électrique'
          className='charging-image'
        />
      </div>
      <button className='simulation-button'>Simulateur</button>
    </section>
  );
};

export default EVChargingTime;
