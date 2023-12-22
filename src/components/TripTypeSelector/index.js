import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionSetTripType,
  actionSetDailyKilometer,
} from "../../actions/ChargingTimeSimulator";
import villeImage from "../../assets/images/ville.png";
import mixteImage from "../../assets/images/mixte.png";
import autorouteImage from "../../assets/images/autoroute.jpg";
import lightIcon from "../../assets/images/light-bulb.png";
import "./styles.css";

const tripTypeOptions = [
  { value: "ville", label: "Ville", image: villeImage },
  { value: "mixte", label: "Mixte", image: mixteImage },
  { value: "autoroute", label: "Autoroute", image: autorouteImage },
];

const dailyKilometerOptions = [10, 20, 30, 40, 50, 70, 100, 200, 300, 400, 500];

function TripTypeSelector() {
  const selectedType = useSelector(
    (state) => state.ChargingTimeSimulator.tripType
  );
  const dailyKilometer = useSelector(
    (state) => state.ChargingTimeSimulator.dailyKilometer
  );
  const dispatch = useDispatch();

  const onTypeChange = (type) => {
    dispatch(actionSetTripType(type));
  };

  const onKilometerChange = (value) => {
    // Trouve la valeur la plus proche dans le tableau
    const nearestValue = dailyKilometerOptions.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    dispatch(actionSetDailyKilometer(nearestValue));
  };

  return (
    <>
      <div className='trip-type-selector'>
        <h1 className='trip-type-selector-title'>
          Choisissez votre type de trajet :
        </h1>
        <div className='labels-container'>
          {tripTypeOptions.map((tripType) => (
            <label className='radio-contain' key={tripType.value}>
              <input
                type='radio'
                value={tripType.value}
                checked={selectedType === tripType.value}
                onChange={() => onTypeChange(tripType.value)}
              />
              <div
                className={`radio-input${
                  selectedType === tripType.value ? " checked" : ""
                }`}
              ></div>
              <img src={tripType.image} alt={tripType.label} />
              <span>{tripType.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className='kilometer-slider'>
        <h2 className='kilometerRange-title'>
          Choisissez votre kilométrage quotidien :
        </h2>
        <div className='kilometerRange-wrapper'>
          <input
            type='range'
            className='kilometerRange-cursor'
            min={0}
            max={dailyKilometerOptions.length - 1}
            step={1}
            value={dailyKilometerOptions.indexOf(dailyKilometer)}
            onChange={(e) =>
              onKilometerChange(dailyKilometerOptions[e.target.value])
            }
          />
          <span className='dailyKilometer'>{dailyKilometer} km/jour</span>
        </div>
      </div>
      <div className='category-explanation'>
        <div className='explanation-box'>
          <div className='light-circle'>
            <img src={lightIcon} alt='Light Icon' />
          </div>
          <div className='explanation-text'>
            <p>
              <span className='highlighted-text'>
                Un véhicule électrique consomme moins en milieu urbain que sur
                autoroute.
              </span>
              <br />
              En ville, le freinage permet de regagner jusqu'à 30% de
              l'autonomie grâce au freinage régénératif. Maintenir une vitesse
              élevée consomme plus d'énergie.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TripTypeSelector;
