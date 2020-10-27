import Alerts from "helpers/Alerts";
import DB from "helpers/db";

class Controller {
  constructor() {
    this.alerts = new Alerts();
    this.db = new DB();
  }

  /*!
  =========================================================
  * 
  =========================================================
  */

  clearData = () => {
    this.db.clear();
    document.location.reload();
  };

  /*!
  =========================================================
  * 
  =========================================================
  */

  errorsHandler = (error, retryHandler, isStrict) => {
    console.error("%c Error > %c", "background:red; color:white", "", error);

    if (error.isAxiosError) {
      if (error.response) {
        if (error.response.status === 422) {
          switch (error.response.data.msg) {
            case "error-incorrect-password":
              return this.alerts.showAlert(
                "Revise la contrasena ingresado...",
                "Contrasena incorrecta!",
                true,
                (e) => {
                  document.getElementById("input-password").focus();
                }
              );

            case "error-unexist-email":
              return this.alerts.showAlert(
                "Revise el correo electrónico ingresado...",
                "Correo electrónico no encontrado!",
                true,
                (e) => {
                  document.getElementById("input-email").focus();
                }
              );

            case "error-already-exist-email":
              return this.alerts.showAlert(
                "Ingrese otro correo...",
                "Correo electrónico ya registrado!",
                true,
                (e) => {
                  document.getElementById("input-email").focus();
                }
              );

            case "error-already-exist-username":
              return this.alerts.showAlert(
                "Ingrese otro nombre...",
                "nombre de cuenta ya registrado!",
                true,
                (e) => {
                  document.getElementById("input-username").focus();
                }
              );

            default:
              return this.alerts.showAlert("Revise los datos ingresados");
          }
        } else if (error.response.status === 406) {
          return this.alerts.showWarning("Contraseña incorrecta");
        } else if (error.response.status === 401) {
          return this.alerts.showWarning(
            "Deve volver a iniciar sesión",
            "Ups... Su sesión caducó",
            true,
            () => {
              this.clearData();
            }
          );
        } else {
          return this.alerts.showErrorUnknow(retryHandler, isStrict);
        }
      } else {
        return this.alerts.showErrorConexion(retryHandler, isStrict);
      }
    } else {
      return this.alerts.showErrorUnknow(retryHandler, isStrict);
    }
  };
}

export default Controller;
