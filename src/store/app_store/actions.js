export const isBeenLoadedUserData = (data) => ({
  type: "UPDATE_SESSION",
  data,
});

export const setTargetUrl = (data) => ({
  type: "SET_TARGET_URL",
  data,
});

export const setIsOffline = (data) => ({
  type: "SET_IS_OFFLINE",
  data,
});

export const setUnexistData = (data) => ({
  type: "SET_UNEXIST_DATA",
  data,
});

export const setEntryData = (data) => ({
  type: "SET_ENTRY_DATA",
  data,
});

export const setBlogData = (data) => ({
  type: "SET_ENTRY_DATA",
  data,
});

export const subscribeToAutoRefresher = (name, priority, myCallBack) => ({
  type: "SUBSCRIBE_TO_AUTO_REFRESHER",
  name,
  priority,
  myCallBack,
});

export const updateLastUpdateAtAutoRefresher = (name, lastUpdate) => ({
  type: "UPDATE_LAST_UPDATE_AT_AUTO_REFRESHER",
  name,
  lastUpdate,
});

export const removeSubscriberToAutoRefresher = (name) => ({
  type: "REMOVE_SUBSCRIBER_TO_AUTO_REFRESHER",
  name,
});

export const removeAllSubscribersToAutoRefresher = () => ({
  type: "REMOVE_ALL_SUBSCRIBERS_TO_AUTO_REFRESHER",
});

export const reset = () => ({
  type: "RESET",
});
