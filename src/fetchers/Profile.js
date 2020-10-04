import swal from "sweetalert2";
import Alerts from "helpers/Alerts";
import Db from "helpers/db";

import store from "store";
import { setUserData } from "store/userData_store/actions";

import axios from "axios"
import { userPicUrl } from "config";
import Controller_admin from ".";

import { cropToProfilePic } from "helpers/image";
import { apiUrl } from "config";


class Controller_Profile extends Controller_admin {
  constructor() {
    super();
    this.alerts = new Alerts();
    this.db = new Db();
  }

  getProfile = (user_name, _callback) => {
    axios({
      method: "get",
      url: apiUrl + "/profile?user_name=" + user_name,
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
  };

  /* =========================================================
   *
   * ========================================================= */

  handleClickPic = (e) => {
    let picUrl = "";
    let pic_url = store.getState().userData.pic_url;
    let blob_pic_url = store.getState().userData.blob_pic_url;

    if (blob_pic_url !== undefined && blob_pic_url) {
      picUrl = blob_pic_url;
    } else {
      if (pic_url) {
        picUrl = userPicUrl + pic_url;
      } else {
        picUrl = require("assets/img/noPic.jpg");
      }
    }

    swal
      .fire({
        title: "Foto de perfil",
        imageUrl: picUrl,
        imageHeight: 180,
        imageWidth: 180,
        showCloseButton: true,
        showCancelButton: pic_url,
        buttonsStyling: false,
        confirmButtonText: '<i className="fa fa-pencil-alt"></i> cambiar',
        confirmButtonClass: "btn btn-primary",
        cancelButtonText: '<i className="fa fa-trash"></i> borrar',
        cancelButtonClass: "btn btn-danger",
        footer:
          "<small className='text-muted'>Importante: esta imagen es pública dentro del sistema de tloging</small>",
      })
      .then((result) => {
        if (result.value) {
          document.getElementById("input-pic").click();
        } else if (result.dismiss === "cancel") {
          this.deletePic();
        }
      });
  };

  /* =========================================================
   *
   * ========================================================= */

  handle_pic_selected(file) {
    cropToProfilePic(file, (blob) => {
      this.unsafeUploadPic(blob);
    });
  }

  unsafeUploadPic = (blob) => {
    this.alerts.showUploding(true, "subiendo...");

    var formData = new FormData();
    formData.append("blob", blob);

    axios({
      method: "post",
      url: apiUrl + "/user_pic",
      headers: {
        "api-token": this.db.get("api-token"),
      },
      data: formData,
      onUploadProgress: (progressEvent) => {
        let percentage = progressEvent.loaded / (progressEvent.total / 100);
        this.alerts.setUplodingPercentage(percentage);
      },
    })
      .then((response) => {
        setTimeout(() => {
          this.alerts.showUploding(false);
          this.alerts.showSuccess("Foto de perfil actualizada");

          store.dispatch(
            setUserData({
              blob_pic_url: URL.createObjectURL(blob),
              pic_url: response.data,
            })
          );
        }, 500);
      })
      .catch((error) => {
        this.errorsHandler(error, () => this.unsafeUploadPic(blob));
      });
  };

  deletePic = () => {
    swal
      .fire({
        showCloseButton: true,
        showCancelButton: true,
        buttonsStyling: false,
        icon: "question",
        title: "Eliminar foto de perfil",
        text: "Está seguro de eliminar su foto de perfil?",
        confirmButtonText: '<i className="fa fa-trash"></i> Sí, eliminar',
        confirmButtonClass: "btn btn-danger",
        cancelButtonText: "cancelar",
        cancelButtonClass: "btn btn-primary",
      })
      .then((result) => {
        if (result.value) {
          this.unsafeDeletePic();
        } else if (result.dismiss === "cancel") {
          this.handleClickPic();
        }
      });
  };

  unsafeDeletePic = () => {
    axios({
      method: "delete",
      url: apiUrl + "/user_pic",
      headers: {
        "Content-Type": "application/json",
        "api-token": this.db.get("api-token"),
      },
    })
      .then(() => {
        this.alerts.showSuccess("Foto de perfil eliminada");

        store.dispatch(
          setUserData({
            blob_pic_url: undefined,
            pic_url: null,
          })
        );
      })
      .catch((error) => {
        this.errorsHandler(error, () => this.unsafeDeletePic());
      });
  };

  /* =========================================================
   *
   * ========================================================= */

  getUserData = (_callback) => {
    axios({
      method: "get",
      url: apiUrl + "/user_data",
      headers: {
        "api-token": this.db.get("api-token"),
      },
    })
      .then((response) => {
        store.dispatch(setUserData(response.data.user_data));
        _callback();
      })
      .catch((error) => {
        this.errorsHandler(error, () => this.getUserData(_callback));
      });
  };

  updateUserData = (form, _callback) => {
    this.alerts.showConfirm(
      "está seguro de continuar?",
      "Actualizando datos de su perfíl",
      true,
      () => {
        this.unsafeUpdateUserData(form, _callback);
      }
    );
  };

  unsafeUpdateUserData = (form, _callback) => {
    this.alerts.showLoading(true);

    let data = {};

    for (let index = 0; index < form.length; index++) {
      if (form[index].name) {
        data[form[index].name] = form[index].value;
      }
    }

    axios({
      method: "post",
      url: apiUrl + "/user_data",
      headers: {
        "Content-Type": "application/json",
        "api-token": this.db.get("api-token"),
      },
      data: data,
    })
      .then((response) => {
        this.alerts.showSuccess("Perfil actualizado");
        store.dispatch(setUserData(response.data));
        _callback(response.data);
      })
      .catch((error) => {
        this.errorsHandler(error, () => this.unsafeUpdateUserData(form));
      });
  };
}

export default Controller_Profile;
