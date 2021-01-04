import { createStore, combineReducers, applyMiddleware } from "redux";
import createSocketIoMiddleware from "redux-socket.io";

import userDataReducer from "store/userData_store/reducer";
import appReducer from "store/app_store/reducer";
import paymentReports from "store/payment_report_store/reducer";

import logger from "redux-logger";
import io from "socket.io-client";
import { apiUrl } from "../../site.config";
import DB from "helpers/db";

const socket = io(apiUrl, {
  query: "token=" + DB.get("api-token"),
});

let socketIoMiddleware = createSocketIoMiddleware(socket, "action/");

const store = createStore(
  combineReducers({
    app: appReducer,
    userData: userDataReducer,
    paymentReports: paymentReports,
  }),
  applyMiddleware(logger, socketIoMiddleware)
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
