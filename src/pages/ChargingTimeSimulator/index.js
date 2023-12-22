import "./styles.css";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import VehicleSelector from "../../components/VehicleSelector";
import TripTypeSelector from "../../components/TripTypeSelector";
import ChargingPowerSelector from "../../components/ChargingPowerSelector";
import ChargingTimeDisplay from "../../components/ChargingTimeDisplay";
import ProgressSteps from "../../components/ProgressSteps";
import ColorLine from "../../components/ColorLine";

function ChargingTimeSimulator() {
  const currentStep = useSelector(
    (state) => state.ChargingTimeSimulator.currentStep
  );
  console.log(currentStep);

  return (
    <>
      <Header />
      <section className='ChargingTimeSimulator'>
        <div className='ContainerContentSimulator'>
          <ProgressSteps />
          <ColorLine />
          {currentStep === 1 && <VehicleSelector/>}
          {currentStep === 2 && <TripTypeSelector />}
          {currentStep === 3 && <ChargingPowerSelector />}
          {currentStep === 4 && <ChargingTimeDisplay />}
        </div>
      </section>
    </>
  );
}

export default ChargingTimeSimulator;
