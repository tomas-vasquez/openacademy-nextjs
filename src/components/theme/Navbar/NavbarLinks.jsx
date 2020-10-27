import DB from "helpers/db";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AvatarNavBar from "./AvatarNavBar";
// import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarLinks = ({ userData, desktop }) => {
  const router = useRouter();

  const openRegisterPage = (e) => {
    e.preventDefault();
    if (router.pathname !== "/login" && router.pathname !== "/register")
      new DB().set("targetPage", document.location.pathname);
    router.push("/register");
  };

  const openLoginPage = (e) => {
    e.preventDefault();
    if (router.pathname !== "/login" && router.pathname !== "/register")
      new DB().set("targetPage", document.location.pathname);
    router.push("/login");
  };

  return (
    <>
      <div
        className={desktop ? "nav-links text-white" : "nav-links"}
        style={{
          display: desktop ? "flex" : "inline-grid",
        }}
      >
        <Link href="/">
          <p className="lead mb-0 mr-4">Home</p>
        </Link>

        {desktop ? (
          <spam className="my-0 pr-4">|</spam>
        ) : (
          <div className="border-top my-4" />
        )}

        {userData ? (
          <AvatarNavBar desktop={desktop} userData={userData} />
        ) : (
          <>
            <a href="/login" onClick={openLoginPage}>
              <p className="lead mb-0 mr-4">login</p>
            </a>
            <a href="/register" onClick={openRegisterPage}>
              <p className="lead mb-0 mr-4">register</p>
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default NavbarLinks;
