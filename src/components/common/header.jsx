import React from "react";
import Separator from "./Separator";

const Banner = ({ title, className = "" }) => {
  return (
    <div className={`pt-5 pt-lg-2 ${className}`}>
      <div className="jumbotron bg-transparent text-light align-content-center pb-0">
        <div className="container text-center ">
          <Separator title={title} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
