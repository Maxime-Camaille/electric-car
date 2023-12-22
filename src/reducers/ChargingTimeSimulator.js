// Import des action types
import {
  SET_VEHICLE_CATEGORY,
  SET_TRIP_TYPE,
  SET_DAILY_KILOMETER,
  SET_CHARGING_POWER,
  SET_CHARGING_TIME,
  SET_CURRENT_STEP,
  // ... (autres action types)
} from "../actions/ChargingTimeSimulator";

// Le reducer initial
const initialState = {
  vehicleCategory: "",
  vehicleOptions: [
    { value: "Citadine", label: "Citadine" },
    { value: "Compact", label: "Compact" },
    { value: "Berline", label: "Berline" },
    { value: "SUV", label: "SUV" },
    { value: "Luxe", label: "Luxe" },
    { value: "Utilitaire", label: "Utilitaire" },
  ],
  vehicleBatteryCapacities: {
    Citadine: 50, // Capacité de batterie pour la catégorie Citadine (à ajuster selon tes besoins)
    Compact: 60, // Capacité de batterie pour la catégorie Compact
    Berline: 90, // Capacité de batterie pour la catégorie Berline
    SUV: 70, // Capacité de batterie pour la catégorie SUV
    Luxe: 100, // Capacité de batterie pour la catégorie Luxe
    Utilitaire: 50, // Capacité de batterie pour la catégorie Utilitaire
  },
  tripType: "ville",
  dailyKilometer: 40,
  chargingPower: 2,
  chargingTime: 0,
  currentStep: 1,
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
    case SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    // ... (autres cas)
    default:
      return state;
  }
};

export default reducer;
