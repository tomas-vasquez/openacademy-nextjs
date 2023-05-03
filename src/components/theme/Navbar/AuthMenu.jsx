import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DB from "../../../helpers/db";
// import Controller_Users from "fetchers/Users";
import Link from "next/link";
import { useFirestore, useUser } from "reactfire";

export default function AuthMenu({ userData, isDark }) {
  const router = useRouter();
  const { data: user } = useUser();
  const [profile, setProfile] = useState(null);
  const fireStore = useFirestore();

  const openRegisterPage = (e) => {
    e.preventDefault();
    if (router.pathname !== "/login" && router.pathname !== "/register")
      DB.set("targetPage", document.location.href);
    router.push("/register");
  };

  useEffect(() => {
    if (user && !profile)
      fireStore
        .collection("profiles")
        .doc(user.uid)
        .onSnapshot((_profile) => {
          const profile = _profile.data();
          setProfile(profile);
        });
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    // new Controller_Users().logout();
  };

  return (
    <>
      <div className="mx-3 d-none d-md-flex">
        {!user ? (
          <>
            <div className="buy-button p-0 m-0 mr-2">
              <a
                className="btn btn-primary my-0 p-2"
                href="/register"
                target="_blank"
                onClick={openRegisterPage}
              >
                Ingresar...
             
            </div>
            {/* <div className="buy-button p-0 ml-0">
              <a
                className="btn btn-light text-dark my-0 p-2"
                href="/login"
                target="_blank"
                onClick={openLoginPage}
              >
                Iniciar sesion
             
            </div> */}
          </>
        ) : (
          <>
            <ul
              className={
                isDark
                  ? "navigation-menu my-auto"
                  : "my-auto navigation-menu nav-light"
              }
            >
              <li className="has-submenu m-0">
                <a href="#!" className="p-0 d-flex">
                  <img
                    icon="user-circle"
                    src={profile ? profile.user_pic : user.photoURL}
                    style={{ width: 40, borderRadius: "50%" }}
                    className="my-auto"
                  />
               
                <ul
                  className="submenu mr-3 submenu-right"
                  style={{
                    left: -20,
                  }}
                >
                  <li className="has-submenu">
                    <Link href={`/user?id=${user.uid}`}>
                      
                        <Icons icon="user" className="mr-2" />
                        Mi perfil
                     
                    </Link>
                  </li>

                  <li className="has-submenu">
                    <a href="#!" onClick={handleLogout}>
                      <Icons icon="logout" className="mr-2" />
                      logout
                   
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
         
        </div>
      </div>
    </>
  );
}
