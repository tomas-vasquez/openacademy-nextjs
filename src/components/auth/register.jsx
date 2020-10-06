import React from "react";
import { user_nameChangedHandler } from "helpers/input";
import { Button, Row, Col, Container } from "reactstrap";
import Link from "next/link";
import Icons from "components/common/Icons";
import Controller_Users from "fetchers/Users";
import DB from "helpers/db";
import { useRouter } from "next/router";

export default function login() {
  const users = new Controller_Users();
  const db = new DB();
  const router = useRouter();

  const openTargetPage = () => {
    const targetPage = db.get("targetPage") || "/";
    router.push(targetPage);
  };

  const submitHandlerRegister = (e) => {
    e.preventDefault();
    users.register(e.target, openTargetPage);
  };

  return (
    <div
      className="d-flex "
      id="home-section"
      style={{
        minHeight: "100vh",
      }}
    >
      <Container className="my-lg-auto " style={{ height: "100%" }}>
        <Row className="align-items-center">
          <Col lg="6" className="mt-5 mt-lg-0">
            <h1
              className="pt-5 mt-3 text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Bienvenido !!!
            </h1>
            <p
              className="mb-4 text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Para acceder a todo el contenido de nuestra academia deves iniciar
              sesion en tu cuenta; si no tienes una cuenta, puedes crearla en
              menos de un minuto!
            </p>
          </Col>

          <Col lg="5" className="ml-auto mt-5 mb-5 mb-lg-0">
            <form
              action=""
              method="post"
              className="form-box"
              onSubmit={submitHandlerRegister}
            >
              <h3 className="h4 text-black mb-4">Crear cuenta:</h3>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="input-email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  name="user_name"
                  type="text"
                  id="input-username"
                  onChange={user_nameChangedHandler}
                  className="form-control"
                  placeholder="Nombre de cuenta"
                  required
                  minLength="8"
                  maxLength="20"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="text"
                  id="input-password"
                  className="form-control"
                  placeholder="Contraseña"
                  required
                  minLength="8"
                  autoComplete="off"
                />
              </div>
              <div className="custom-control custom-checkbox my-3">
                <input
                  className="custom-control-input"
                  name="accept_the_terms"
                  id="customCheckRegister"
                  type="checkbox"
                />
                <label
                  className="custom-control-label d-inline"
                  htmlFor="customCheckRegister"
                >
                  Acepto los
                  <Link href="/terms"> términos y condiciones.</Link>
                </label>
              </div>
              <div className="form-group text-center">
                <Button type="submit" color="info">
                  Crear cuenta
                  <Icons icon="arrowRight" className="ml-2" />
                </Button>
              </div>
              <div className="text-center">
                <p className="m-0 text-muted">
                  <Link href="/login">¿Ya tienes una cuenta?</Link>
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
