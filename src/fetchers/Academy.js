import Alerts from "helpers/Alerts";
import DB from "helpers/db";

import store from "store";
import Controller_admin from ".";
import {
  setCourses,
  setAuthors,
  setDescription,
} from "store/academy_store/actions";

import { setItems } from "store/academy_store/actions";
import { setTest } from "store/academy_store/actions";

import axios from "axios";
import { apiUrl } from "config";
import { courseItemsDescriptionsUrl } from "config";
import { testsUrl } from "config";

class Controller_Academy extends Controller_admin {
  constructor() {
    super();
    this.alerts = new Alerts();
    this.db = new DB();
  }

  /* =========================================================
   *
   * ========================================================= */

  loadCourses(_callback) {
    axios({
      method: "get",
      url: apiUrl + "/academy/courses",
    })
      .then((response) => {
        store.dispatch(setCourses(response.data.courses));
        store.dispatch(setAuthors(response.data.authors));
        // store.log();
        _callback(response.data, null);
      })
      .catch((error) => {
        _callback(null, error);
      });
  }

  /* =========================================================
   *
   * ========================================================= */

  loadItems(currentCourse, _callback) {
    axios({
      method: "get",
      url: apiUrl + "/academy/items/" + currentCourse,
    })
      .then((response) => {
        store.dispatch(setItems(currentCourse, response.data.items));
        store.log();
        _callback(response.data, null);
      })
      .catch((error) => {
        _callback(null, error);
      });
  }

  /* =========================================================
   *
   * ========================================================= */

  loadDescription(currentDescription, _callback) {
    axios({
      method: "get",
      url: courseItemsDescriptionsUrl + currentDescription,
    })
      .then((response) => {
        store.dispatch(setDescription(currentDescription, response.data));
        _callback(response.data, null);
      })
      .catch((error) => {
        _callback(null, error);
      });
  }

  /* =========================================================
   *
   * ========================================================= */

  loadTest(testId, _callback) {
    axios({
      method: "get",
      url: testsUrl + "/" + testId,
    })
      .then((response) => {
        store.dispatch(setTest(testId, response.data));
        _callback(response.data, null);
      })
      .catch((error) => {
        _callback(null, error);
      });
  }

  /* =========================================================
   *
   * ========================================================= */

  qualify(test, answers, _callback) {
    axios({
      method: "post",
      url: testsUrl + "/" + test._id,
      data: { answers },
      headers: {
        "Content-Type": "application/json",
        "api-token": this.db.get("api-token"),
      },
    })
      .then((response) => {
        _callback(response.data, null);
      })
      .catch((error) => {
        _callback(null, error);
      });
  }
}

export default Controller_Academy;
