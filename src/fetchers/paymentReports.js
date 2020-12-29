import Axios from "axios";
import Controller from "fetchers";
import DB from "helpers/db";
import { apiUrl } from "../../site.config";

class PaymentReports extends Controller {
  uploadReport = (course, pics, description, _callback) => {
    this.alerts.showLoading();
    var formData = new FormData();

    formData.append(
      "target",
      JSON.stringify({ tipe: "course", _id: course._id })
    );
    pics.forEach((pic, index) => {
      if (pic) {
        formData.append(`pic${index}`, pic);
      }
    });
    formData.append("description", description);

    Axios({
      method: "post",
      url: `${apiUrl}/payment/report`,
      headers: {
        "Content-Type": "application/json",
        "api-token": DB.get("api-token"),
      },
      data: formData,
    })
      .then((response) => {
        console.log(response.data);
        this.alerts.showSuccess("Espere...", "Perfecto!!!");
        _callback();
      })
      .catch((error) => {
        console.log(error);
        this.errorsHandler(error, () => {
          this.uploadReport(course, pics, description, _callback);
        });
      });
  };
}

export default PaymentReports;
