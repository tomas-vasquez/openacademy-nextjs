export const addProduct = (data) => ({
  type: "ADD_PRODUCT",
  data,
});

export const removeProduct = (data) => ({
  type: "REMOVE_PRODUCT",
  data,
});

export const removeAll = (data) => ({
  type: "REMOVE_ALL",
  data,
});
