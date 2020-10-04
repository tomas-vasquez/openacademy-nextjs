import React from "react";
import Layout from "./Layout";
import { Container, Col, Row } from "reactstrap";

export default function index(props) {
  return (
    <Layout>
      <div className="site-wrap">
        <Container fluid>
          <Row>
            <Col lg="9" className="p-0 border-right">
              <NavbarCourse />
            </Col>
          </Row>
        </Container>
      </div>
      {JSON.stringify(props)}
    </Layout>
  );
}
