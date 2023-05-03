const initial = { products: [] };

export default (state = initial, action) => {
  let aux;

  switch (action.type) {
    case "ADD_PRODUCT":
      aux = { ...state };
      aux.products.push(action.data);
      return aux;

    case "REMOVE_PRODUCT":
      aux = { ...state };
      aux.products = aux.products.filter(
        (product) => product.shortLink !== action.data.shortLink
      );
      return aux;

    case "REMOVE_ALL":
      return initial;

    default:
      return state;
  }
};
