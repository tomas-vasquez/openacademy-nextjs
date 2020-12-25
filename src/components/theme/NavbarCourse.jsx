import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React from "react";
import Switch from "./Navbar/Switch";

export default function NavbarCourse() {
  const router = useRouter();

  return (
    <div className="bg-black d-flex px-md-3">
      <div className="buy-button ml-2 my-auto">
        <a
          className="btn btn-primary py-1 px-2"
          href="#!"
          onClick={() => {
            router.back();
          }}
        >
          <Icons icon="arrowLeft" className="m-0" />
          <span className="d-none d-md-inline ml-2">back</span>
        </a>
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
      <div className="my-auto ml-auto">
        <Switch />
      </div>
    </div>
  );
}
