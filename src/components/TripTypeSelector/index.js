import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetTripType } from '../../actions/ChargingTimeSimulator'; // Assurez-vous d'ajuster le chemin d'import en fonction de l'emplacement réel de vos actions
import "./styles.css";

function TripTypeSelector() {
  const selectedType = useSelector((state) => state.tripType);
  const dispatch = useDispatch();

  const onTypeChange = (type) => {
    // Dispatch l'action pour mettre à jour le type de trajet
    dispatch(actionSetTripType(type));
  };

  return (
    <div>
      <label>Choisissez votre type de trajet :</label>
      <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="ville">Ville</option>
        <option value="mixte">Mixte</option>
        <option value="autoroute">Autoroute</option>
      </select>
    </div>
  );
}

export default TripTypeSelector;
