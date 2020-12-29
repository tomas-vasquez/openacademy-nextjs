export default (state = [], action) => {
  if (action.type === "ADD_REPORT") {
    return [...state, action.data];
  } else if (action.type === "DELETE_REPORT") {
    let aux = [...state];

    return aux.filter((report) => {
      console.log("--->>>>>", report._id, action.data);
      return `${report._id}` !== `${action.data}`;
    });
  }

  return state;
};
