// Import des action types
import {
  SET_VEHICLE_CATEGORY,
  SET_TRIP_TYPE,
  SET_DAILY_KILOMETER,
  SET_CHARGING_POWER,
  SET_CHARGING_TIME,
  // ... (autres action types)
} from '../actions/ChargingTimeSimulator'; 

// Le reducer initial
const initialState = {
  vehicleCategory: 'Citadine',
  vehicleOptions: [
    { value: 'Citadine', label: 'Citadine' },
    { value: 'Compact', label: 'Compact' },
    { value: 'Berline', label: 'Berline' },
    { value: 'SUV', label: 'SUV' },
    { value: 'Luxe', label: 'Luxe' },
    { value: 'Utilitaire', label: 'Utilitaire' },
  ],
  tripType: 'city',
  dailyKilometer: 30,
  chargingPower: 2,
  chargingTime: 0,
  // ... (autres états initiaux)
};

// Le reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLE_CATEGORY:
      return { ...state, vehicleCategory: action.payload };
    case SET_TRIP_TYPE:
      return { ...state, tripType: action.payload };
    case SET_DAILY_KILOMETER:
      return { ...state, dailyKilometer: action.payload };
    case SET_CHARGING_POWER:
      return { ...state, chargingPower: action.payload };
    case SET_CHARGING_TIME:
      return { ...state, chargingTime: action.payload };
    // ... (autres cas)
    default:
      return state;
  }
};

export default reducer;
