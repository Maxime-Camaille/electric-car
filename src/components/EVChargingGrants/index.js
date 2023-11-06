import React from "react";
import "./styles.css";
import logoAdvenir from "../../assets/images/logoAdvenir.png";
import chargingGrants from "../../assets/images/chargingGrants.png";


const EVChargingGrants = () => {
  return (
    <section className="grants-section">
      <div className="grants-container">
    <div className="grants-left">
      <img
        src={logoAdvenir}
        alt="Logo Advenir"
        className="advenir-logo"
      />
      <h3 className="grants-title">Bénéficiez d'aides financières</h3>
      <p className="grants-text">
        Notre équipe prend en charge l’intégralité de votre demande de prime ADVENIR. De la création de votre dossier de demande, en passant par la gestion et le suivi administratif, Bornstall s’occupe de tout.
      </p>
      <button className="grants-button">Faire ma demande en ligne</button>
    </div>
    <div className="grants-right">
      <img
        src={chargingGrants}
        alt="Subventions pour bornes de recharge"
        className="charging-grants-illustration"
      />
    </div>
    </div>
  </section>
  
  );
};

export default EVChargingGrants;
