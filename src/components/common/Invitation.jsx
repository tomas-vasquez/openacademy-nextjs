import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

export default function Invitation() {
  return (
    <div
      className="d-flex p-3 mt-4 border-top shadow"
      style={{
        backgroundColor: "#f7f8fa",
      }}
    >
      <Container>
        <Row>
          <Col xs="auto" className="d-none d-sm-block">
            <img
              style={{
                width: 100,
              }}
              src="/img/invitation.png"
              alt=""
            />
          </Col>
          <Col xs="" className="d-flex p-0">
            <Row className="p-0">
              <Col xs="12" sm="" className="my-auto">
                <strong>Enseña al mundo en línea</strong>
                <p className="mb-0">
                  Crea un curso en vídeo en línea, llega a estudiantes de todo
                  el mundo y gana dinero
                </p>
              </Col>
              <Col xs="12" lg="auto" className="ml-auto my-auto">
                <Button color="info" className="mt-3 my-lg-auto">
                  Ensena en Open Academy
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
