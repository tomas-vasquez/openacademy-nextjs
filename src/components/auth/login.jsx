import React, { useContext } from "react";

import DB from "helpers/db";
import { useRouter } from "next/router";
import svgUrl from "assets/svgs/undraw_secure_login_pdn4.svg";
import { Card, CardBody, Col, Row } from "reactstrap";

import FirebaseContext from "context/FirebaseContext";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export default function login() {
  const router = useRouter();
  const firebase = useContext(FirebaseContext);

  const openTargetPage = () => {
    const targetPage = DB.get("targetPage") || "/";
    router.push(targetPage);
  };

  return (
    <>
      <div
        className="d-flex"
        style={{
          width: "100%",
          height: "100vh",

          backgroundColor: "#1a274e",
          zIndex: -1,
        }}
      >
        <Card className="m-auto bg-light p-3">
          <CardBody>
            <Row>
              <Col lg="6" className="d-none d-lg-flex ">
                <img
                  className="mx-auto"
                  src={svgUrl}
                  alt=""
                  style={{ maxWidth: "380px" }}
                />
              </Col>
              <Col xs="12" lg="6" className="py-2 px-4 text-center">
                <h1 className="mb-4">Ingresar con:</h1>
                <p>Crea una cuenta o ingresa con alguno de estos metodos:</p>
                <StyledFirebaseAuth
                  uiConfig={{
                    signInFlow: "popup",
                    signInOptions: [
                      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    ],
                    callbacks: {
                      signInSuccessWithAuthResult: (data) => {
                        openTargetPage();
                      },
                    },
                  }}
                  firebaseAuth={firebase.auth()}
                />
                <small className="text-muted mt-4">
                  <small className="text-dark">Importante: </small>ingresando a
                  nuestra plataforma aceptas los terminos y condiciones de uso.
                </small>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
