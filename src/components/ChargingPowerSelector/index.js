import { useDispatch, useSelector } from "react-redux";
import { actionSetChargingPower } from "../../actions/ChargingTimeSimulator";
import { actionSetCurrentStep } from "../../actions/ChargingTimeSimulator";
import priseImage from "../../assets/images/priseRenforcée.png";
import greenUpImage from "../../assets/images/priseGreenUp.png";
import wallBox from "../../assets/images/wallBox.png";
import evBox from "../../assets/images/evBox.png";
import copper from "../../assets/images/copper.png";
import lightIcon from "../../assets/images/light-bulb.png";
import "./styles.css";

const typeChargingPowerImages = {
  "2 kW": priseImage,
  "3.7 kW": greenUpImage,
  "7.4 kW": wallBox,
  "11 kW": evBox,
  "22 kW": copper,
};

function ChargingPowerSelector() {
  const dispatch = useDispatch();

  const currentStep = useSelector(
    (state) => state.ChargingTimeSimulator.currentStep
  );

  const nextStep = () => {
    dispatch(actionSetCurrentStep(currentStep + 1));
  };

  const selectedPower = useSelector(
    (state) => state.ChargingTimeSimulator.chargingPower
  );

  const onPowerChange = (power) => {
    // Dispatch l'action pour mettre à jour la puissance de recharge
    dispatch(actionSetChargingPower(power));
  };

  return (
    <>
      <section className='chargingPowerSelector'>
        <div className='chargingPowerSelector-wrapper'>
          <h1 className='chargingPowerSelector-title'>
            Choisissez la puissance de recharge :
          </h1>
          <div className='controller-options-chargingPowerSelector'>
            <div className='chargingPower-images'>
              {Object.entries(typeChargingPowerImages).map(
                ([power, imageUrl]) => (
                  <div
                    key={power}
                    className={`chargingPowerSelector-button ${
                      selectedPower === power ? "active-chargingPower" : ""
                    }`}
                    onClick={() => {
                      onPowerChange(power);
                      setTimeout(() => {
                        nextStep();
                      }, 200);
                    }}
                  >
                    <input
                      className='checkbox'
                      type='checkbox'
                      checked={selectedPower === power}
                      onChange={() => onPowerChange(power)}
                    />
                    <img src={imageUrl} alt={power} />
                    <span className={`nameOfCategory ${
                    selectedPower === power ? "active" : ""
                  }`}>{power}</span>
                  </div>
                )
              )}
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
                    Plus la borne est puissante, plus le temps de charge sera
                    rapide.
                  </span>
                  <br />
                  Des bornes puissantes c’est bien mais encore faut-il savoir si
                  votre voiture électrique peut encaisser les fortes puissances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChargingPowerSelector;
