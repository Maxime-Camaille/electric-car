// index.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionSetCurrentStep } from "../../actions/ChargingTimeSimulator";

import "./styles.css";

const steps = [
  {
    label: "Véhicule",
    stepNumber: 1,
  },
  {
    label: "Trajet",
    stepNumber: 2,
  },
  {
    label: "Borne",
    stepNumber: 3,
  },
  {
    label: "Résultat",
    stepNumber: 4,
  },
];

const totalSteps = steps.length;

function ProgressSteps() {
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.ChargingTimeSimulator.currentStep
  );
  console.log(currentStep);
  const nextStep = () => {
    dispatch(actionSetCurrentStep(currentStep + 1));
  };

  const prevStep = () => {
    dispatch(actionSetCurrentStep(currentStep - 1));
  };

  return (
    <section className='ProgressSteps'>
      <div className='step-main-container'>
        <button
          className='button-style-previous'
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <span class='arrow arrow-left'></span>
        </button>
        <button
          className='button-style-next'
          onClick={nextStep}
          disabled={currentStep === 4}
        >
          <span class='arrow arrow-right'></span>
        </button>

        <div className={`step-container-${currentStep}`}>
          {steps.map(({ stepNumber, label }) => (
            <div key={stepNumber} className='step-wrapper'>
              <div
                className={`step-style ${
                  currentStep === stepNumber
                    ? "active"
                    : currentStep > stepNumber
                    ? "completed"
                    : "incompleted"
                }`}
              >
                {currentStep > stepNumber ? (
                  <div className='check-mark'>L</div>
                ) : (
                  <div
                    className={`step-count ${
                      currentStep === stepNumber ? "active" : ""
                    }`}
                  >
                    {currentStep === stepNumber ? (
                      <div className='active-circle'></div>
                    ) : (
                      stepNumber
                    )}
                  </div>
                )}
              </div>
              <div className='steps-label-container'>
                <div
                  className={`step-label-count ${
                    currentStep >= stepNumber ? "completed" : "incompleted"
                  }`}
                >
                  ETAPE {stepNumber}
                </div>
                <span
                  className={`step-label ${
                    currentStep >= stepNumber ? "completed" : "incompleted"
                  }`}
                  key={stepNumber}
                >
                  {label}
                </span>
                <div
                  className={`step-status ${
                    currentStep === stepNumber
                      ? "active"
                      : currentStep > stepNumber
                      ? "completed"
                      : "incompleted"
                  }`}
                >
                  {currentStep === stepNumber
                    ? "En Cours"
                    : currentStep > stepNumber
                    ? "Terminé"
                    : "En attente"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgressSteps;
