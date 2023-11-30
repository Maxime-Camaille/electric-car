import React, { useEffect } from "react";
import "./styles.css";
import Header from "../../components/Header";
import MainHeroChargingTimeSimulator from "../../components/MainHeroChargingTimeSimulator";
import VehicleSelector from "../../components/VehicleSelector";
import TripTypeSelector from "../../components/TripTypeSelector";
import DailyKilometerSelector from "../../components/DailyKilometerSelector";
import ChargingTimeDisplay from "../../components/ChargingTimeDisplay";
import Footer from "../../components/Footer";

function ChargingTimeSimulator() {

  const MainHeroChargingTimeSimulatorProps = {
    whiteTitle: "Le simulateur du",
    greenTitle: "temps de recharge.",
    description:
      "Simuler, brancher, charger. Un simulateur de temps de charge, facile, rapide et résolument tourné vers l'avenir.",
    ctaText: "Faire Installer une Borne",
    ctaLink: "/form",
  };

  return (
    <>
      <Header />
      <MainHeroChargingTimeSimulator {...MainHeroChargingTimeSimulatorProps} />
      <VehicleSelector />
      <TripTypeSelector />
      <DailyKilometerSelector />
      <ChargingTimeDisplay
        vehicleCategory='compact' // Exemple de valeur pour vehicleCategory
        tripType='ville' // Exemple de valeur pour tripType
        dailyKilometers={30} // Exemple de valeur pour dailyKilometers
        chargingPower={7.4} // Exemple de valeur pour chargingPower
      />
      <Footer />
    </>
  );
}

export default ChargingTimeSimulator;
