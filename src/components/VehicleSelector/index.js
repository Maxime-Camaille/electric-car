import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetVehicleCategory } from "../../actions/ChargingTimeSimulator";
import { actionSetCurrentStep } from "../../actions/ChargingTimeSimulator";
import citadineImage from "../../assets/images/citadine.png";
import compactImage from "../../assets/images/compact.png";
import berlineImage from "../../assets/images/berline.png";
import suvImage from "../../assets/images/suv.png";
import luxeImage from "../../assets/images/luxe.png";
import utilitaireImage from "../../assets/images/utilitaire.png";
import lightIcon from "../../assets/images/light-bulb.png";
import "./styles.css";

const categoryImages = {
  Citadine: citadineImage,
  Compact: compactImage,
  Berline: berlineImage,
  SUV: suvImage,
  Luxe: luxeImage,
  Utilitaire: utilitaireImage,
};

function VehicleSelector() {
  const dispatch = useDispatch();

  const currentStep = useSelector(
    (state) => state.ChargingTimeSimulator.currentStep
  );

  const nextStep = () => {
    dispatch(actionSetCurrentStep(currentStep + 1));
  };

  const selectedCategory = useSelector(
    (state) => state.ChargingTimeSimulator.vehicleCategory
  );

  const onCategoryChange = (category) => {
    dispatch(actionSetVehicleCategory(category));
  };

  return (
    <>
      <section className='vehicleSelector'>
        <div className='vehicleSelector-wrapper'>
          <h1 className='vehicleSelector-title'>
            Choisissez votre catégorie de véhicule :
          </h1>
          <div className='controller-options-category-vehicule'>
            <div className='category-images'>
              {Object.entries(categoryImages).map(([category, imageUrl]) => (
                <div
                  key={category}
                  className={`category-vehicule-button ${
                    selectedCategory === category ? "active-category" : ""
                  }`}
                  onClick={() => {
                    onCategoryChange(category);
                    setTimeout(() => {
                      nextStep();
                    }, 200);
                  }}
                >
                  <input
                    className='checkbox'
                    type='checkbox'
                    checked={selectedCategory === category}
                    onChange={() => onCategoryChange(category)}
                  />
                  <img src={imageUrl} alt={category} />
                  <span className={`nameOfCategory ${
                    selectedCategory === category ? "active" : ""
                  }`}>{category}</span>
                </div>
              ))}
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
                    En fonction de la catégorie de la voiture, la capacité de la
                    batterie diffère.
                  </span>
                  <br />
                  De ce fait, plus elle est grande, plus le temps de charge sera
                  élevé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VehicleSelector;
