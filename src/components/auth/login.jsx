import React from "react";

// import { connect } from "react-redux";
// import { replace } from "connected-react-router/lib/actions";
// import { setTargetUrl } from "store/app_store/actions";
// import { Link } from "react-router-dom";
// import { myRoutes } from "config";

import { Button, Row, Col, Container } from "reactstrap";

// import Controller_Users from "fetchers/Users";
import { user_nameChangedHandler } from "helpers/input";
import Link from "next/link";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    // this.users = new Controller_Users();
  }

  openTargetPage = () => {
    if (this.props.targetUrl !== null) {
      this.props.replace(this.props.targetUrl);
    } else {
      this.props.replace(myRoutes.home);
    }
  };

  submitHandlerLogin = (e) => {
    e.preventDefault();
    this.users.login(e.target, this.openTargetPage);
  };

  //   submitHandlerRegister = (e) => {
  //     e.preventDefault();
  //     this.users.register(e.target, this.openTargetPage);
  //   };

  //   componentDidMount() {
  //     window.addEventListener("resize", this.handlerResizeWindow);
  //   }

  //   componentWillUnmount() {
  //     this.props.setTargetUrl(null);
  //     window.removeEventListener("resize", this.handlerResizeWindow);
  //   }

  render() {
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
                Para acceder a todo el contenido de nuestra academia deves
                iniciar sesion en tu cuenta; si no tienes una cuenta, puedes
                crearla en menos de un minuto!
              </p>
            </Col>

            <Col lg="5" className="ml-auto mt-5 mb-5 mb-lg-0">
              <form
                action=""
                method="post"
                className="form-box"
                onSubmit={this.submitHandlerLogin}
              >
                <h3 className="h4 text-black mb-4">Iniciar sesión:</h3>
                <div className="form-group">
                  <input
                    id="input-email"
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email Addresss"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    id="input-password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
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
                  <Button
                    type="submit"
                    color="primary"
                    className="btn btn-primary btn-pill"
                  >
                    Iniciar sesión
                    <i className="fa fa-sign-in-alt ml-2" />
                  </Button>
                </div>
                <div className="text-center">
                  <p className="m-0 text-muted">
                    <Link href="/register">¿No tienes una cuenta?</Link>
                  </p>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Auth;
