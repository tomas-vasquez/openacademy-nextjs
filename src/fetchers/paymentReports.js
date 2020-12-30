import Axios from "axios";
import Controller from "fetchers";
import DB from "helpers/db";
import store from "store";
import { addReport, deleteReport } from "store/payment_report_store/actions";
import { apiUrl } from "../../site.config";

class PaymentReports extends Controller {
  uploadReport = (course, pics, description, _callback) => {
    this.alerts.showLoading();
    var formData = new FormData();

    pics.forEach((pic, index) => {
      if (pic) {
        formData.append(`pic${index}`, pic);
      }
    });
    formData.append("report_description", description);
    formData.append("report_addressee_id", course.course_author_id);
    formData.append(
      "report_subject",
      JSON.stringify({ tipe: "course", _id: course._id })
    );

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
        store.dispatch(addReport(response.data));
        store.log();
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

  /* =========================================================
   *
   * ========================================================= */

  deleteReport = (paymentReport) => {
    this.UNSAFE_deleteReport(paymentReport);
  };

  UNSAFE_deleteReport = (paymentReportId) => {
    this.alerts.showLoading();

    Axios({
      method: "delete",
      url: `${apiUrl}/payment/report/${paymentReportId}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": DB.get("api-token"),
      },
    })
      .then((response) => {
        console.log(response.data);
        store.dispatch(deleteReport(paymentReportId));
        store.log();
        this.alerts.showSuccess("Espere...", "Perfecto!!!");
      })
      .catch((error) => {
        console.log(error);
        this.errorsHandler(error, () => {
          this.UNSAFE_deleteReport(paymentReportId);
        });
      });
  };
}

export default PaymentReports;
