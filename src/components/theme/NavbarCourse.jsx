import Link from "next/link";
import React from "react";
import { Navbar } from "reactstrap";
export default function NavbarCourse() {
  return (
    <Navbar className="py-2" style={{ backgroundColor: "#29303b" }} expand="md">
      <div className="navbar-wrapper">
        <Link href="/">
          <h1 className="h3 text-white">Vikings</h1>
        </Link>
      </div>
    </Navbar>
  );
}
