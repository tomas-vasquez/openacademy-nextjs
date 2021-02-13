import DB from "helpers/db";
import store from "store";
// import Controller_Profile from "fetchers/Profile";
// import Controller_Academy from "fetchers/Academy";

export const loadUserData = (_callback) => {
  let userData = store.getState().userData;

  if (!userData) {
    if (DB.get("api-token")) {
      const profile = new Controller_Profile();
      profile.getUserData(() => {
        _callback();
      });
    }
  }
};

/* =========================================================
 *
 * ========================================================= */

export const loadItems = (_callback) => {
  let courseInUrl = document.baseURI.split("/")[3];
  let items = store.getState().academy.items;

  if (!items[courseInUrl]) {
    const academy = new Controller_Academy();
    academy.loadItems(courseInUrl, (response, error) => {
      if (response.items) {
        if (response.items.length !== 0) _callback(null, response.items);
      } else {
        _callback(error, null);
      }
    });
  } else {
    _callback(null, items[courseInUrl]);
  }
};

/* =========================================================
 *
 * ========================================================= */

export const getCurrentCourse = (courses) => {
  let courseInUrl = document.baseURI.split("/")[3];

  if (courses) {
    return courses.find((course) => {
      return course.course_short_link === courseInUrl;
    });
  } else {
    return null;
  }
};

/* =========================================================
 *
 * ========================================================= */

const sortItems = (array) => {
  var aux = array;

  for (let y = 0; y <= array.length - 2; y++) {
    for (let i = 0; i <= array.length - 2; i++) {
      if (array[i].item_sort > array[i + 1].item_sort) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  }
  return array;
};

/* =========================================================
 *
 * ========================================================= */

const getCurrentTitle = (items) => {
  let courseInUrl = document.baseURI.split("/")[3];
  let item_title = document.baseURI.split("/")[4];

  let classes = sortItems(items).filter(
    (item) => item.item_type !== "separator"
  );

  let targetItem = null;

  if (item_title !== undefined) {
    targetItem = item_title;
    DB.set("lastItem>" + courseInUrl, item_title);
  } else {
    let indb = DB.get("lastItem>" + courseInUrl);
    if (indb === undefined) {
      targetItem = classes[0].item_title;
      DB.set("lastItem>" + courseInUrl, targetItem);
    } else {
      targetItem = indb;
    }
  }
  let aux = classes.find((item) => {
    return item.item_title === targetItem.replace(/_/g, " ");
  });
  if (aux === undefined) {
    DB.set("lastItem>" + courseInUrl, classes[0].item_title);
    return classes[0].item_title;
  } else {
    return targetItem.replace(/_/g, " ");
  }
};

/* =========================================================
 *
 * ========================================================= */

export const getCurrentItem = (items) => {
  if (items && items.length !== 0) {
    let nextItem = null;
    let currentItem = null;
    let proviusItem = null;
    let itemIndex = 0;

    let currentTitle = getCurrentTitle(items);

    const classes = sortItems(items).filter(
      (item) => item.item_type !== "separator"
    );

    classes.forEach((item, key) => {
      if (item.item_title === currentTitle) {
        proviusItem = classes[key - 1];
        currentItem = item;
        nextItem = classes[key + 1];
        itemIndex = key + 1;
      }
    });

    return { proviusItem, currentItem, nextItem, itemIndex };
  } else {
    return {};
  }
};
