import React from "react";

const Hamburger = ({ sidebar, toggle }) => {
  return (
    <div
      className="hamburger"
      style={
        sidebar
          ? {
              position: "fixed",
            }
          : {}
      }
      sidebar={sidebar}
      role="button"
      onClick={() => {
        toggle(!sidebar);
      }}
    >
      <div
        className="bar"
        style={
          sidebar
            ? {
                backgroundColor: "#212121",
                transform: "translateY(8px) rotate(-135deg)",
              }
            : {}
        }
      />
      <div
        className="bar"
        style={
          sidebar
            ? {
                transform: "scale(0)",
              }
            : {}
        }
      />
      <div
        className="bar"
        style={
          sidebar
            ? {
                backgroundColor: "#212121",
                transform: "translateY(-6px) rotate(-45deg)",
              }
            : {}
        }
      />
    </div>
  );
};

export default Hamburger;
