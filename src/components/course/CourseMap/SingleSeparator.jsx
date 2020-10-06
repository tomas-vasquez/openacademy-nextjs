import React from "react";
import _ from "lodash";
import classnames from "classnames";
import Icons from "components/common/Icons";

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
    <Icons
      icon={active ? "angleUp" : "angleDown"}
      className={"ml-auto"}
      style={{
        fontSize: "x-large",
      }}
    />
  </div>
);

export default SingleSeparator;
