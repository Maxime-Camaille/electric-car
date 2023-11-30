import { useDispatch, useSelector } from "react-redux";
import { actionSetDailyKilometer } from "../../actions/ChargingTimeSimulator";
import "./styles.css";

function DailyKilometerSelector() {
  const selectedKilometers = useSelector((state) => state.dailyKilometer);
  const dispatch = useDispatch();

  const onKilometersChange = (kilometers) => {
    // Dispatch l'action pour mettre à jour le kilométrage quotidien
    dispatch(actionSetDailyKilometer(kilometers));
  };

  return (
    <div>
      <label>Kilométrage quotidien :</label>
      <input
        type='number'
        value={selectedKilometers}
        onChange={(e) => onKilometersChange(e.target.value)}
      />
      <span> km</span>
    </div>
  );
}

export default DailyKilometerSelector;
