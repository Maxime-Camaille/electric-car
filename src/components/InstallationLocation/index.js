import React from "react";
import maison from "../../assets/images/maison.svg";
import copro from "../../assets/images/copro.svg";
import travail from "../../assets/images/travail.svg";
import "./styles.css";

const InstallationLocation = () => {
  return (
    <section className='installationLocation'>
      <div className='installationLocation__container'>
        <h3>
          Où souhaitez-vous installer
          <span className='greenAccentuation'> votre borne de recharge ?</span>
        </h3>
        <div className='grid-container'>
          <div className='grid-item'>
            <img src={copro} alt='copro' />
            <div className='text-item'>
              <h4>Copropriété</h4>
            </div>
          </div>
          <div className='grid-item__active'>
            <img src={maison} alt='maison' />
            <div className='text-item'>
              <h4>Maison</h4>
            </div>
          </div>

          <div className='grid-item'>
            <img src={travail} alt='travail' />
            <div className='text-item'>
              <h4>Entreprise</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationLocation;
