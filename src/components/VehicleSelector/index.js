import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetVehicleCategory } from "../../actions/ChargingTimeSimulator";
import citadineImage from "../../assets/images/citadine.png";
import compactImage from "../../assets/images/compact.png";
import berlineImage from "../../assets/images/berline.png";
import suvImage from "../../assets/images/suv.png";
import luxeImage from "../../assets/images/luxe.png";
import utilitaireImage from "../../assets/images/utilitaire.png";
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
  const selectedCategory = useSelector((state) => state.ChargingTimeSimulator.vehicleCategory);
  const dispatch = useDispatch();

  console.log("Initial selectedCategory:", selectedCategory);

  const onCategoryChange = (category) => {
    console.log("Category changed to:", category);
    dispatch(actionSetVehicleCategory(category));
  };

  return (
    <div>
      <label>Choisissez votre catégorie de véhicule :</label>
      <div className='category-images'>
        {Object.entries(categoryImages).map(([category, imageUrl]) => (
          <div
            key={category}
            className={`category-image ${
              selectedCategory === category ? "active-category" : ""
            }`}
            onClick={() => onCategoryChange(category)}
          >
            <img src={imageUrl} alt={category} />
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleSelector;
