import siteConfig from "../../../site.config";

const mySiteConfig = {
  currentExchangeRate: siteConfig.exchangeRates[0],
};

export default (state = mySiteConfig, action) => {
  let aux;

  switch (action.type) {
    case "SET_CURRENT_EXCHANGE_RATE":
      aux = { ...state };
      aux.currentExchangeRate = action.data;
      return aux;

    case "SET_CURRENT_USER":
      aux = { ...state };
      aux.user = action.data;
      return aux;

    case "DELETE_CURRENT_USER":
      aux = { ...state };
      aux.user = null;
      return aux;

    default:
      return state;
  }
};
