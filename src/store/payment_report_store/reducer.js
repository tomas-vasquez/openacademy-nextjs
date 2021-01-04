export default (state = null, action) => {
  if (action.type === "ADD_REPORT") {
    let aux = state || [];
    aux.push(action.data);
    return [...aux];
  } else if (action.type === "DELETE_REPORT") {
    let aux = [...state];
    aux = aux.filter((report) => {
      return `${report._id}` !== `${action.data._id}`;
    });
    return [...aux];
  }
  return state;
};
