// StepIndicator.js

import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const StepIndicator = () => {
  const steps = [
    { number: 1, name: "Catégorie de véhicule" },
    { number: 2, name: "Type de trajet" },
    { number: 3, name: "Kilométrage quotidien" },
    { number: 4, name: "Puissance de la borne" },
    { number: 5, name: "Résultat" },
  ];

  const currentStep = useSelector((state) => state.ChargingTimeSimulator.currentStep);
console.log(currentStep);

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={index} className={`step ${currentStep === step.number ? "active" : ""}`}>
          {index > 0 && (
            <div className="step-line" style={{ borderColor: currentStep >= step.number ? "#07eb99" : "#fff" }}></div>
          )}
          <div className={`step-circle ${currentStep === step.number ? "active" : ""}`}>
            {currentStep > step.number ? (
              <div className="step-check">&#10003;</div>
            ) : (
              <div className="step-number">{step.number}</div>
            )}
          </div>
          <div className="step-name">{step.name}</div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
