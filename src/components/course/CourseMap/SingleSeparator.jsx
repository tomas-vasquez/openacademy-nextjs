import React from "react";
import _ from "lodash";
import classnames from "classnames";

const SingleSeparator = ({ title, active, onClick }) => (
  <div
    className="p-3 border-bottom d-flex"
    onClick={onClick}
    style={{
      cursor: "pointer",
      backgroundColor: "#f7f8fa",
    }}
  >
    <span className="">
      <strong>{_.upperFirst(title)}</strong>
    </span>
    <i
      className={classnames("fa ml-auto mr-4", {
        "fa-angle-up": active,
        "fa-angle-down": !active,
      })}
      style={{
        fontSize: "x-large",
      }}
    />
  </div>
);

export default SingleSeparator;
