import "./styles.css";
// ChargingTimeDisplay.js
import React, { useEffect, useState } from 'react';

function ChargingTimeDisplay({
  vehicleCategory,
  tripType,
  dailyKilometers,
  chargingPower,
}) {
  const [chargingTime, setChargingTime] = useState(0);

  // Logique de calcul du temps de recharge (à adapter en fonction de votre formule)
  const calculateChargingTime = (category, type, kilometers, power) => {
    // Logique de calcul du temps de recharge ici
    // Cela pourrait être une formule basée sur les paramètres donnés
    // Dans cet exemple, je vais simplement simuler un calcul pour montrer comment vous pourriez faire.
    const baseTime = 1; // Remplacez par votre formule de calcul
    const calculatedTime = baseTime * kilometers / power;
    return calculatedTime;
  };

  useEffect(() => {
    const calculatedTime = calculateChargingTime(vehicleCategory, tripType, dailyKilometers, chargingPower);
    setChargingTime(calculatedTime);
  }, [vehicleCategory, tripType, dailyKilometers, chargingPower]);

  return (
    <div>
      <p>Temps de recharge : {chargingTime} heures</p>
    </div>
  );
}

export default ChargingTimeDisplay;
