import React from "react";
import NavbarLinks from "./NavbarLinks";

const Sidebar = ({ sidebar, toggle, location }) => {
  return (
    <div
      className="sidebar d-lg-none shadow"
      style={
        sidebar
          ? {
              width: 250,
              right: 0,
              opacity: 1,
            }
          : null
      }
      onClick={toggle}
    >
      <div className="">
        <NavbarLinks location={location} />
      </div>
    </div>
  );
};

export default Sidebar;
