import "./styles.css";
import { useSelector } from "react-redux";
import citadineImage from "../../assets/images/citadine.png";
import compactImage from "../../assets/images/compact.png";
import berlineImage from "../../assets/images/berline.png";
import suvImage from "../../assets/images/suv.png";
import luxeImage from "../../assets/images/luxe.png";
import utilitaireImage from "../../assets/images/utilitaire.png";
import villeImage from "../../assets/images/ville.png";
import mixteImage from "../../assets/images/mixte.png";
import autorouteImage from "../../assets/images/autoroute.png";
import priseImage from "../../assets/images/priseRenforcée.png";
import greenUpImage from "../../assets/images/priseGreenUp.png";
import wallBox from "../../assets/images/wallBox.png";
import evBox from "../../assets/images/evBox.png";
import copper from "../../assets/images/copper.png";
import temperature from "../../assets/images/temperature.png";

function ChargingTimeDisplay() {
  const categoryImages = {
    Citadine: citadineImage,
    Compact: compactImage,
    Berline: berlineImage,
    SUV: suvImage,
    Luxe: luxeImage,
    Utilitaire: utilitaireImage,
  };

  const tripTypeOptions = {
    ville: villeImage,
    mixte: mixteImage,
    autoroute: autorouteImage,
  };

  const typeChargingPowerImages = {
    "2 kW": priseImage,
    "3.7 kW": greenUpImage,
    "7.4 kW": wallBox,
    "11 kW": evBox,
    "22 kW": copper,
  };

  // Import des choix de l'utilisateur venant du state
  const selectedCategory = useSelector(
    (state) => state.ChargingTimeSimulator.vehicleCategory
  );
  const selectedType = useSelector(
    (state) => state.ChargingTimeSimulator.tripType
  );
  const dailyKilometer = useSelector(
    (state) => state.ChargingTimeSimulator.dailyKilometer
  );
  const selectedPower = useSelector(
    (state) => state.ChargingTimeSimulator.chargingPower
  );

  return (
    <div className='ChargingTimeDisplay-wrapper'>
      <section className='recapitulatif'>
        <div className='recapitulatif-wrapper'>
          <h2 className='recapitulatif-title'>Récapitulatif de vos choix</h2>
          <ul className='listing-etape'>
            <li className='listing-etape1'>
              <div className='text-etape1-container'>
                <p className='step-label-count completed'>Etape 1</p>
                <span className='step-label completed'>
                  Véhicule selectionné:
                </span>
                <img
                  className='categorySelected-image'
                  src={categoryImages[selectedCategory]}
                  alt={selectedCategory}
                />
                <p className='categorySelected-text'>{selectedCategory}</p>
              </div>
            </li>
            <li className='listing-etape2'>
              <div className='text-etape1-container'>
                <p className='step-label-count completed'>Etape 2</p>
                <span className='step-label completed'>Type de trajet:</span>
                <img
                  className='categorySelected-image'
                  src={tripTypeOptions[selectedType]}
                  alt={selectedType}
                />
                <p className='categorySelected-text'>
                  {dailyKilometer} km - {selectedType}
                </p>
              </div>
            </li>
            <li className='listing-etape3'>
              <div className='text-etape1-container'>
                <p className='step-label-count completed'>Etape 3</p>
                <span className='step-label completed'>
                  Puissance de borne:
                </span>
                <img
                  className='categorySelected-image'
                  src={typeChargingPowerImages[selectedPower]}
                  alt={selectedPower}
                />
                <p className='categorySelected-text'>{selectedPower}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='ChargingTimeDisplay'>
        <div className='chargingTimeDisplayContent'>
          <h1 className='chargingTimeDisplay-title'>
            Le temps de recharge est estimé à :
          </h1>
          <div className='recharge-time-text'>
            <div className='battery-container'>
              <div class='battery'>
                <div class='liquid'></div>
              </div>
            </div>
            <span>6 h 43</span>
          </div>
          <p>
            Durée de charge simulée sur la base des paramètres sélectionnés. La
            durée de charge réelle peut varier.
          </p>
          <img
            className='temperature-image'
            src={temperature}
            alt='thermometre'
          />
          <p>
            De manière générale, la batterie se recharge le plus rapidement
            lorsque la température de la batterie est comprise entre 20 et 30
            degrés, alors que la durée de recharge est plus longue lorsque la
            température est basse.
          </p>
          <img
            className='temperature-image'
            src={temperature}
            alt='thermometre'
          />
          <p>
            la durée de recharge est plus longue lorsque la batterie est presque
            vide que lorsqu’elle est à moitié pleine.
          </p>
          <img
            className='temperature-image'
            src={temperature}
            alt='thermometre'
          />
          <p>
            autonomie restante par rapport à votre profil de conduite pour vos
            trajets du quotidien
          </p>
        </div>
      </section>
    </div>
  );
}

export default ChargingTimeDisplay;
