export default (state = null, action) => {
  if (action.type === "SET_USERDATA") {
    return { ...action.data };
  } else if (action.type === "DELETE_USERDATA") {
    return null;
  }

  return state;
};
