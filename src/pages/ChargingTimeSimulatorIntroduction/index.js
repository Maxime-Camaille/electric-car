import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import MainHeroChargingTimeSimulator from "../../components/MainHeroChargingTimeSimulator";

function ChargingTimeSimulatorIntroduction() {

  return (
    <>
      <Header />
      <MainHeroChargingTimeSimulator
        whiteTitle='Le simulateur du'
        greenTitle='temps de recharge.'
        description="Simuler, brancher, charger. Un simulateur de temps de charge, facile, rapide et résolument tourné vers l'avenir."
        ctaText='Lancer le Simulateur'
        ctaLink='/simulateur/temps-de-recharge-voiture-electrique/choix-categorie-vehicule'
      />
    </>
  );
}

export default ChargingTimeSimulatorIntroduction;
