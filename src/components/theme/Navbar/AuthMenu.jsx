import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DB from "../../../helpers/db";
import Link from "next/link";
import { connect } from "react-redux";

import app from "myFirebase";
import { doc, getDoc } from "firebase/firestore";

function AuthMenu(props) {
  const { isDark, user } = props;
  const router = useRouter();

  const [profile, setProfile] = useState(null);

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

  openLoginPage;
  const myFunction = async () => {
    if (user && !profile) {
      const db = app.firestore();
      const docRef = doc(db, "profiles", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const profile = docSnap.data();
        setProfile(profile);
      }
    }
  };
  useEffect(() => {
    myFunction();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    app.auth().signOut();
  };

  return (
    <>
      <div className="mx-3 d-none d-md-flex">
        {!user ? (
          <>
            {router.pathname !== "/register" ? (
              <div className="buy-button p-0 m-0 mr-2">
                <a
                  className="btn btn-primary my-0 p-2"
                  href="/register"
                  target="_blank"
                  onClick={openRegisterPage}
                >
                  Registrarme...
                </a>
              </div>
            ) : (
              <></>
            )}
            {router.pathname !== "/login" ? (
              <div className="buy-button p-0 ml-0">
                <a
                  className="btn btn-light text-dark my-0 p-2"
                  href="/login"
                  target="_blank"
                  onClick={openLoginPage}
                >
                  Iniciar sesion
                </a>
              </div>
            ) : (
              <></>
            )}
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
                </a>
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
const mapStateToProps = (state) => {
  return {
    user: state.settings.user,
  };
};

export default connect(mapStateToProps)(AuthMenu);
