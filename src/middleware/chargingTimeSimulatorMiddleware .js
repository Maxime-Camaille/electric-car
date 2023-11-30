import {
  SET_VEHICLE_CATEGORY,
  SET_TRIP_TYPE,
  SET_DAILY_KILOMETER,
  SET_CHARGING_POWER,
  SET_CHARGING_TIME,
} from '../actions/ChargingTimeSimulator';

const chargingTimeSimulatorMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Ajoutez d'autres cas en fonction des actions que vous souhaitez intercepter
    case SET_VEHICLE_CATEGORY:
    case SET_TRIP_TYPE:
    case SET_DAILY_KILOMETER:
    case SET_CHARGING_POWER:
    case SET_CHARGING_TIME:
      // Vous pouvez ajouter des traitements spécifiques pour chaque action si nécessaire
      break;

    default:
      break;
  }

  next(action);
};

export default chargingTimeSimulatorMiddleware;
