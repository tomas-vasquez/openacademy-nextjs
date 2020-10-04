import Controller_admin from ".";

import Alerts from "helpers/Alerts";
import { apiLoginUrl, apiSignupUrl, apiUrl } from "config";
import axios from "axios"

class Controller_Users extends Controller_admin {
  constructor() {
    super();
    this.alerts = new Alerts();
  }

  /*!
    =========================================================
    * 
    =========================================================
    */

  register = (form, _callback) => {
    this.alerts.showLoading();

    let data = {};

    for (let index = 0; index < form.length; index++) {
      if (form[index].name) {
        data[form[index].name] = form[index].value;
        if (form[index].name === "accept_the_terms") {
          data[form[index].name] = form[index].checked;
        }
      }
    }

    if (data.accept_the_terms) {
      data.accept_the_terms = undefined;

      axios({
        method: "post",
        url: apiSignupUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
        .then((response) => {
          this.alerts.showSuccess("Espere...", "Perfecto!!!");
          this.db.set("api-token", response.data.api_token);
          _callback();
        })
        .catch((error) => {
          this.errorsHandler(error, () => this.register(form, _callback));
        });
    } else {
      return this.alerts.showAlert(
        "No aceptó nuestros términos y condiciones de uso",
        "",
        true,
        (e) => {
          document.getElementById("customCheckRegister").focus();
        }
      );
    }
  };

  /*!
    =========================================================
    * 
    =========================================================
    */

  login = (form, _callback) => {
    this.alerts.showLoading();

    let data = {};

    for (let index = 0; index < form.length; index++) {
      if (form[index].name) {
        data[form[index].name] = form[index].value;
        if (form[index].name === "remember_token")
          data[form[index].name] = form[index].checked;
      }
    }

    axios({
      method: "post",
      url: apiLoginUrl,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        this.alerts.showSuccess("Espere...", "Perfecto!!!");
        this.db.set("api-token", response.data.api_token);
        _callback();
      })
      .catch((error) => {
        this.errorsHandler(error, () => this.login(form, _callback));
      });
  };

  /*!
    =========================================================
    * 
    =========================================================
    */

  logout = () => {
    this.alerts.showConfirm("esta seguro?", "Cerrando sesión", true, () => {
      this.unsafeLogout();
    });
  };

  unsafeLogout = () => {
    this.alerts.showLoading();

    axios({
      method: "get",
      url: apiUrl + "/user/logout",
      headers: {
        "api-token": this.db.get("api-token"),
      },
    })
      .then((response) => {
        this.alerts.showSuccess("Hasta luego...", "Sesión cerrada ");
        this.clearData();
      })
      .catch((error) => {
        this.errorsHandler(error, () => this.unsafeLogout());
      });
  };
}

export default Controller_Users;
