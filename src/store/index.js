import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import carStore from "./car_store/reducer";
import settingsStore from "../store/setting_store/reducer";

import logger from "redux-logger";

const store = createStore(
  combineReducers({
    settings: settingsStore,
    car: carStore,
  })
  // applyMiddleware(logger)
);

export default store;
