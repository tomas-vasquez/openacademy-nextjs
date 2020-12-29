const initialState = {
  targetUrl: null,
  autoRefresherSubscribers: [],
};

export default (state = initialState, action) => {
  var aux;

  if (action.type === "SET_TARGET_URL") {
    //pagina a cargar despues de login o register
    aux = state;
    aux.targetUrl = action.data;
    return aux;
  } else if (action.type === "SUBSCRIBE_TO_AUTO_REFRESHER") {
    // console.log("add:", { name: action.name, priority: action.priority, myCallBack: action.myCallBack });
    aux = state;
    //ELIMINAMOS el que ya tenemos
    aux.autoRefresherSubscribers = aux.autoRefresherSubscribers.filter(
      (subscriber) => {
        let name = subscriber.name.split("?")[0];
        return name !== action.name.split("?")[0];
      }
    );
    //añadimos el nuevo
    aux.autoRefresherSubscribers.push({
      name: action.name,
      priority: action.priority,
      myCallBack: action.myCallBack,
    });
    return aux;
  } else if (action.type === "REMOVE_SUBSCRIBER_TO_AUTO_REFRESHER") {
    console.log("removed:", action.name);
    aux = state;
    aux.autoRefresherSubscribers = aux.autoRefresherSubscribers.filter(
      (subscriber) => {
        let name = subscriber.name.split("?")[0];
        return name !== action.name;
      }
    );
    return aux;
  } else if (action.type === "UPDATE_LAST_UPDATE_AT_AUTO_REFRESHER") {
    console.log("AR: UPDATED:", action.name);
    aux = state;
    //ELIMINAMOS el que ya tenemos
    aux.autoRefresherSubscribers = aux.autoRefresherSubscribers.filter(
      (subscriber) => {
        let name = subscriber.name.split("?")[0];
        return name !== action.name.split("?")[0];
      }
    );

    //añadimos el nuevo
    aux.autoRefresherSubscribers.push({
      name: action.name,
      priority: action.priority,
      myCallBack: action.myCallBack,
    });
    return aux;
  } else if (action.type === "REMOVE_ALL_SUBSCRIBERS_TO_AUTO_REFRESHER") {
    console.log("removed: all");
    aux = state;
    aux.autoRefresherSubscribers = [];
    return aux;

    //Borra todo
  } else if (action.type === "RESET") {
    return initialState;
  }

  return state;
};
