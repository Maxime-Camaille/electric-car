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
  vehicleCategory: "Berline",
  vehicleOptions: [
    { value: "Citadine", label: "Citadine" },
    { value: "Compact", label: "Compact" },
    { value: "Berline", label: "Berline" },
    { value: "SUV", label: "SUV" },
    { value: "Luxe", label: "Luxe" },
    { value: "Utilitaire", label: "Utilitaire" },
  ],
  vehiclesCapacities: {
    Citadine: 50, // Capacité de batterie pour la catégorie Citadine (en kWh)
    Compact: 60, // Capacité de batterie pour la catégorie Compact (en kWh)
    Berline: 75, // Capacité de batterie pour la catégorie Berline (en kWh)
    SUV: 85, // Capacité de batterie pour la catégorie SUV (en kWh)
    Luxe: 100, // Capacité de batterie pour la catégorie Luxe (en kWh)
    Utilitaire: 60, // Capacité de batterie pour la catégorie Utilitaire (en kWh)
  },

  vehicules: {
    Citadine: {
      consommationVille: 12.65, // en kWh/100 km
      consommationMixte: 15, // en kWh/100 km
      consommationAutoroute: 18, // en kWh/100 km
      capaciteBatterie: 50, // en kWh
    },
    Compact: {
      consommationVille: 13.5, // en kWh/100 km
      consommationMixte: 16.5, // en kWh/100 km
      consommationAutoroute: 19.5, // en kWh/100 km
      capaciteBatterie: 60, // en kWh
    },
    Berline: {
      consommationVille: 15, // en kWh/100 km
      consommationMixte: 17.5, // en kWh/100 km
      consommationAutoroute: 20, // en kWh/100 km
      capaciteBatterie: 75, // en kWh
    },
    SUV: {
      consommationVille: 18, // en kWh/100 km
      consommationMixte: 21, // en kWh/100 km
      consommationAutoroute: 24, // en kWh/100 km
      capaciteBatterie: 85, // en kWh
    },
    Luxe: {
      consommationVille: 20, // en kWh/100 km
      consommationMixte: 22, // en kWh/100 km
      consommationAutoroute: 26, // en kWh/100 km
      capaciteBatterie: 100, // en kWh
    },
    Utilitaire: {
      consommationVille: 25, // en kWh/100 km
      consommationMixte: 27, // en kWh/100 km
      consommationAutoroute: 30, // en kWh/100 km
      capaciteBatterie: 60, // en kWh
    },
  },

  tripType: "mixte",
  dailyKilometer: 40,
  chargingPower: "7.4 kW",
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
