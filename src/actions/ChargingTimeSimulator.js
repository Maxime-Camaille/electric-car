// Action types constants (à inclure dans votre fichier si nécessaire)
export const SET_VEHICLE_CATEGORY = "SET_VEHICLE_CATEGORY";
export const SET_TRIP_TYPE = "SET_TRIP_TYPE";
export const SET_DAILY_KILOMETER = "SET_DAILY_KILOMETER";
export const SET_CHARGING_POWER = "SET_CHARGING_POWER";
export const SET_CHARGING_TIME = "SET_CHARGING_TIME";
// ... (autres types d'actions)

// Action creators adaptés au modèle du reducer

// Action creator pour mettre à jour la catégorie de véhicule
export function actionSetVehicleCategory(category) {
  return {
    type: SET_VEHICLE_CATEGORY,
    payload: category,
  };
}

// Action creator pour mettre à jour le type de trajet
export function actionSetTripType(tripType) {
  return {
    type: SET_TRIP_TYPE,
    payload: tripType,
  };
}

// Action creator pour mettre à jour le kilométrage quotidien
export function actionSetDailyKilometer(dailyKilometer) {
  return {
    type: SET_DAILY_KILOMETER,
    payload: dailyKilometer,
  };
}

// Action creator pour mettre à jour la puissance de recharge
export function actionSetChargingPower(chargingPower) {
  return {
    type: SET_CHARGING_POWER,
    payload: chargingPower,
  };
}

// Action creator pour mettre à jour le temps de recharge
export function actionSetChargingTime(chargingTime) {
  return {
    type: SET_CHARGING_TIME,
    payload: chargingTime,
  };
}
