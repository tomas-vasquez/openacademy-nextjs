import React from "react";
import _ from "lodash";
import Icons from "components/common/Icons";

const SingleSeparator = ({ title, active, onClick }) => (
  <div
    className="p-3 border-bottom d-flex bg-light"
    onClick={onClick}
    style={{
      cursor: "pointer",
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
