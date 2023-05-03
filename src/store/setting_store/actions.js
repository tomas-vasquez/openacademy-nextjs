export const setCurrentExchangeRate = (data) => ({
  type: "SET_CURRENT_EXCHANGE_RATE",
  data,
});

export const setCurrentUser = (data) => ({
  type: "SET_CURRENT_USER",
  data,
});

export const deleteCurrentUser = (data) => ({
  type: "DELETE_CURRENT_USER",
  data,
});
