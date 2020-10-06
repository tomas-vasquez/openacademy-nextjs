import React, { useState } from "react";

import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";

import { Container, Navbar as NavBar } from "reactstrap";

//config
// import { banner } from "../../../data/config";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";

// const FirstName = banner.FirstName;

export default function Navbar(props) {
  const [sidebar, toggle] = useState(false);

  return (
    <div className="my-navbar absolute">
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <div
        className="my-navbar-overlay"
        sidebar={sidebar}
        role="buttom"
        onClick={() => toggle(!sidebar)}
      />
      <NavBar className="navbar-dark navbar-absolute bg-transparent">
        <Container>
          <div className="navbar-wrapper d-flex">
            <Link href="/">
              <h1
                className="text-white py-4"
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                Open Academy
              </h1>
            </Link>
          </div>
          <div className="d-none d-lg-flex py-auto">
            <NavbarLinks desktop {...props} />
          </div>
        </Container>
      </NavBar>
      <Sidebar sidebar={sidebar} toggle={toggle} {...props} />
    </div>
  );
}
