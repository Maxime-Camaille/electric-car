import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import Header from "../../components/Header";
import ChargingTimeDisplay from "../../components/ChargingTimeDisplay";

function ChargingTimeSimulatorResultat() {
  const currentStep = useSelector(
    (state) => state.ChargingTimeSimulator.currentStep
  );
  console.log(currentStep);

  return (
    <>
      <Header />
      <ChargingTimeDisplay />
    </>
  );
}

export default ChargingTimeSimulatorResultat;
