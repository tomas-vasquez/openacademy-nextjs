import React from "react";
import Icons from "./Icons";

export default function Separator({ title, dark }) {
  return (
    <>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 300,
          lineHeight: 1.2,
        }}
        className="mb-0 text-center"
      >
        {title}
      </h2>
      <div
        className={`divider-custom my-1 mb-lg-4 ${!dark && "divider-light"}`}
      >
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <Icons icon={"star"} />
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
}
