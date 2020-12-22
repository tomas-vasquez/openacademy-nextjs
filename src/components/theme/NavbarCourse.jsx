import Icons from "components/common/Icons";
import Link from "next/link";
import React from "react";
import Switch from "./Navbar/Switch";

export default function NavbarCourse() {
  return (
    <div className="bg-black px-2 d-flex content">
      <div className="buy-button ml-2 my-auto">
        <Link href="/courses" target="_blank">
          <p className="btn btn-primary p-2 m-0">
            <Icons icon="arrowLeft" className="mr-2" />
            All courses
          </p>
        </Link>
      </div>

      <div className="">
        <a className=" ml-3 logo" href="index.html">
          <img
            src={require("../../assets/images/logo-light.png")}
            height="24"
            alt=""
          />
        </a>
      </div>
      <div className="ml-auto">
        <Switch />
      </div>
    </div>
  );
}
