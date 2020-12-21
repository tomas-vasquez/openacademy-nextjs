import { useRouter } from "next/router";
import React from "react";
import DB from "../../../helpers/db";

export default function AuthName() {
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
      <div className="buy-button pl-2 d-none d-lg-block">
        <a
          className="mr-2"
          href="/register"
          target="_blank"
          onClick={openRegisterPage}
        >
          <p className="btn btn-primary py-2 my-0">Registrarme</p>
        </a>
      </div>
      <div className="buy-button d-none d-sm-block">
        <a
          className="mr-2"
          href="/login"
          target="_blank"
          onClick={openLoginPage}
        >
          <p className="btn btn-light py-2 my-0">Iniciar sesion</p>
        </a>
      </div>
    </>
  );
}
