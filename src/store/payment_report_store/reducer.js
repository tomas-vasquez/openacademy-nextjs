export default (state = null, action) => {
  if (action.type === "ADD_REPORT") {
    let aux = state || [];
    aux.push(action.data);
    return aux;
  } else if (action.type === "DELETE_REPORT") {
    let aux = [...state];

    return aux.filter((report) => {
      console.log("--->>>>>", report._id, action.data);
      return `${report._id}` !== `${action.data}`;
    });
  }

  return state;
};
