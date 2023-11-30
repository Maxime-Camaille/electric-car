import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { actionSetChargingPower } from "../../actions/ChargingTimeSimulator";

function ChargingPowerSelector() {
  const selectedPower = useSelector((state) => state.chargingPower);
  const dispatch = useDispatch();

  const onPowerChange = (power) => {
    // Dispatch l'action pour mettre à jour la puissance de recharge
    dispatch(actionSetChargingPower(power));
  };

  return (
    <div>
      <label>Choisissez la puissance de la borne :</label>
      <select
        value={selectedPower}
        onChange={(e) => onPowerChange(parseFloat(e.target.value))}
      >
        <option value={2}>2 kW</option>
        <option value={3.7}>3.7 kW</option>
        <option value={7.4}>7.4 kW</option>
        <option value={11}>11 kW</option>
        <option value={22}>22 kW</option>
      </select>
    </div>
  );
}

export default ChargingPowerSelector;
