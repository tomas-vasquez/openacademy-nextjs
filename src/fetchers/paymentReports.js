import Axios from "axios";
import Controller from "fetchers";
import DB from "helpers/db";
import store from "store";
import { addReport, deleteReport } from "store/payment_report_store/actions";
import { apiUrl } from "../../site.config";

class PaymentReports extends Controller {
  uploadReport = (course, pics, description, _success) => {
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
        store.dispatch(addReport(response.data));
        this.alerts.showSuccess("Espere...", "Perfecto!!!");
        _success();
      })
      .catch((error) => {
        console.log(error);
        this.errorsHandler(error, () => {
          this.uploadReport(course, pics, description, _success);
        });
      });
  };

  /* =========================================================
   *
   * ========================================================= */

  deleteReport = (paymentReport) => {
    this.UNSAFE_deleteReport(paymentReport);
  };

  UNSAFE_deleteReport = (paymentReport) => {
    this.alerts.showLoading();

    Axios({
      method: "delete",
      url: `${apiUrl}/payment/report/${paymentReport._id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": DB.get("api-token"),
      },
    })
      .then((response) => {
        store.dispatch(deleteReport(paymentReport));
        this.alerts.showSuccess("Espere...", "Perfecto!!!");
      })
      .catch((error) => {
        console.log(error);
        this.errorsHandler(error, () => {
          this.UNSAFE_deleteReport(paymentReport);
        });
      });
  };

  loadPymentReports = (_success) => {
    Axios({
      method: "get",
      url: `${apiUrl}/payment/report`,
      headers: {
        "Content-Type": "application/json",
        "api-token": DB.get("api-token"),
      },
    })
      .then((response) => {
        const reports = [...response.data];

        if (reports.length > 0) {
          reports.forEach((report) => {
            store.dispatch(addReport(report));
          });
        }
        _success();
      })
      .catch((error) => {
        console.log(error);
        this.errorsHandler(error, () => {
          this.UNSAFE_deleteReport(paymentReport);
        });
      });
  };
}

export default PaymentReports;
