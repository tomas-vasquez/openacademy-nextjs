import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React from "react";
import DB from "../../../helpers/db";
import { deleteUserData } from "store/userData_store/actions";
import store from "store";
import user from "components/userProfile";
import Controller_Users from "fetchers/Users";

export default function AuthMenu({ userData, isDark }) {
  const router = useRouter();

  const openRegisterPage = (e) => {
    e.preventDefault();
    if (router.pathname !== "/login" && router.pathname !== "/register")
      DB.set("targetPage", document.location.href);
    router.push("/register");
  };

  const openLoginPage = (e) => {
    e.preventDefault();
    if (router.pathname !== "/login" && router.pathname !== "/register")
      DB.set("targetPage", document.location.href);
    router.push("/login");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    new Controller_Users().logout();
  };

  return (
    <>
      <div className="mx-2 d-none d-md-block">
        {!userData ? (
          <>
            <div className="buy-button p-0 m-0">
              <a
                className="btn btn-primary my-0 p-2"
                href="/register"
                target="_blank"
                onClick={openRegisterPage}
              >
                Registrarme
              </a>
            </div>
            <div className="buy-button p-0 mr-2 ml-0">
              <a
                className="btn btn-light text-dark my-0 p-2"
                href="/login"
                target="_blank"
                onClick={openLoginPage}
              >
                Iniciar sesion
              </a>
            </div>
          </>
        ) : (
          <>
            <ul
              className={
                isDark ? "navigation-menu" : "navigation-menu nav-light"
              }
            >
              <li className="has-submenu m-0">
                <a href="#!" className="p-0 d-flex">
                  <Icons
                    icon="user-circle"
                    className="fa-1x text-muted my-auto"
                  />
                </a>
                <ul
                  className="submenu mr-3"
                  style={{
                    left: -20,
                  }}
                >
                  <li className="has-submenu">
                    <a href="#!" onClick={handleLogout}>
                      <Icons icon="logout" className="mr-2" />
                      logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        )}
      </div>

      <div className="menu-extras my-auto mx-1 d-md-none ">
        <div className="menu-item pt-2">
          <a href="#!">
            <Icons icon="user-circle" className="fa-1x text-muted" />
          </a>
        </div>
      </div>
    </>
  );
}
