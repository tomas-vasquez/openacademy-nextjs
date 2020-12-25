import React from "react";
import _ from "lodash";

export default function Header({ title }) {
  return (
    <section
      className="bg-profile d-table w-100"
      style={{
        backgroundColor: "#1a274e",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-heading">
              <h2 className="my-4 mt-md-0 text-center">
                {_.upperFirst(title)}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
