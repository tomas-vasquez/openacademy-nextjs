import React from "react";

import { Button } from "reactstrap";
import Link from "next/link";
import Icons from "components/common/Icons";
import Controller_Users from "fetchers/Users";
import DB from "helpers/db";
import { useRouter } from "next/router";

export default function login() {
  const users = new Controller_Users();
  const router = useRouter();

  const openTargetPage = () => {
    const targetPage = DB.get("targetPage") || "/";
    router.push(targetPage);
  };

  const submitHandlerLogin = (e) => {
    e.preventDefault();
    users.login(e.target, openTargetPage);
  };

  return (
    <>
      <section className="p-0 m-0">
        <div
          className="bg-overlay "
          style={{
            backgroundColor: "#1a274e",
            zIndex: -1,
          }}
        ></div>
        <div className="container" style={{}}>
          <div
            className="row pt-5 d-flex"
            style={{ minHeight: "100vh", zIndex: 1 }}
          >
            <div className="col-12 col-md-6 mr-auto d-none d-md-flex">
              <div className="title-heading my-auto">
                <h1 className="heading text-white title-dark mb-4">
                  Bienvenido !!!
                </h1>
                <p
                  className="mb-4 mr-5 text-white"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Para acceder a todo el contenido de nuestra academia deves
                  iniciar sesion en tu cuenta; si no tienes una cuenta, puedes
                  crearla en menos de un minuto!
                </p>
              </div>
            </div>
            <div className="my-auto col-12 col-md-6 col-lg-5">
              <div className="shape-before">
                <form
                  action=""
                  method="post"
                  className="rounded p-4 bg-white"
                  onSubmit={submitHandlerLogin}
                >
                  <h3 className="h4 text-black  mb-4">Iniciar sesión:</h3>
                  <div className="form-group">
                    <labell>Tu correo:</labell>
                    <input
                      id="input-email"
                      type="text"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <label>Tu contrasena:</label>
                  <div className="form-group">
                    <input
                      id="input-password"
                      name="password"
                      type="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="custom-control custom-checkbox my-3">
                    <input
                      className="custom-control-input"
                      name="remember_token"
                      id="customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label d-inline"
                      htmlFor="customCheckLogin"
                    >
                      Recordarme en este dispositivo
                    </label>
                  </div>
                  <div className="form-group text-center">
                    <Button type="submit" color="primary">
                      Iniciar sesión
                      <Icons icon="sign" className="ml-2" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="m-0 text-muted">
                      <Link href="/register">¿No tienes una cuenta?</Link>
                    </p>
                  </div>
                </form>
                <img
                  src={require("../../assets/images/shapes/shape1.png")}
                  className="img-fluid shape-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
