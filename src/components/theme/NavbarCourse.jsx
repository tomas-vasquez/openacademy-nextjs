import Icons from "components/common/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Switch from "./Navbar/Switch";
import { siteMetadata } from "../../../site.config";

export default function NavbarCourse({ isDark }) {
  const router = useRouter();

  return (
    <div className="bg-black d-flex px-md-3">
      {/* <div className="buy-button ml-2 my-auto">
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
      </div> */}

      <div className="d-flex float-left" style={{ height: 60 }}>
        <div className="logo my-auto">
          <Link href="/">
            <h4 className={"m-0 white"}>
              <Icons
                icon="code"
                className="mr-2 bg-primary p-1 rounded white fa-1x"
                color="#fff"
              />
              {siteMetadata.title}
            </h4>
          </Link>
        </div>
      </div>
      <div className="my-auto ml-auto">
        <Switch />
      </div>
    </div>
  );
}
