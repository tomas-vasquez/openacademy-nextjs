import { createStore, combineReducers, applyMiddleware } from "redux";

import userDataReducer from "store/userData_store/reducer";
import appReducer from "store/app_store/reducer";

import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    app: appReducer,
    userData: userDataReducer,
  }),
  applyMiddleware(thunk)
);

store.log = () => {
  console.log(
    "  %c Store > %c estado:%c",
    "background:green; color:white",
    "background:#b6ffa7",
    "",
    store.getState()
  );
};

export default store;
