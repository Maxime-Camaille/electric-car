import "./App.css";
import HomePage from "../../pages/HomePage";
import ServicesOverviewPage from "../../pages/ServicesOverviewPage";
import ChargingTimeSimulatorIntroduction from "../../pages/ChargingTimeSimulatorIntroduction";
import ChargingTimeSimulator from "../../pages/ChargingTimeSimulator";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const currentStep = useSelector(
    (state) => state.ChargingTimeSimulator.currentStep
  );

  // Fonction pour obtenir le chemin en fonction de currentStep
  const getPathForStep = (step) => {
    switch (step) {
      case 1:
        return "/choix-categorie-vehicule";
      case 2:
        return "/type-trajet";
      case 3:
        return "/puissance-borne";
      case 4:
        return "/resultat-simulation";
      default:
        return "/";
    }
  };

  useEffect(() => {
    const path = `/simulateur/temps-de-recharge-voiture-electrique${getPathForStep(currentStep)}`;
    window.history.replaceState({}, "", path);
  }, [currentStep]);


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesOverviewPage />} />
        <Route
          path='/simulateur/temps-de-recharge-voiture-electrique'
          element={<ChargingTimeSimulatorIntroduction />}
        />
       <Route
          path='/simulateur/temps-de-recharge-voiture-electrique/choix-categorie-vehicule'
          element={<ChargingTimeSimulator />}
        />
        <Route
          path='/simulateur/temps-de-recharge-voiture-electrique/type-trajet'
          element={<ChargingTimeSimulator />}
        />
        <Route
          path='/simulateur/temps-de-recharge-voiture-electrique/puissance-borne'
          element={<ChargingTimeSimulator />}
        />
        <Route
          path='/simulateur/temps-de-recharge-voiture-electrique/resultat-simulation'
          element={<ChargingTimeSimulator />}
        />
      </Routes>
    </div>
  );
}

export default App;
