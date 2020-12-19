import React from "react";

export default function Partners() {
  return (
    <section className="py-4 border-bottom border-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/amazon.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/google.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/lenovo.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/paypal.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/shopify.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/spotify.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
