import React from "react";
import Layout from "./Layout";
import { Container, Col, Row } from "reactstrap";
import NavbarCourse from "components/theme/NavbarCourse";
import CourseMap from "./CourseMap";

export default function index({ items, currentItem, course }) {
  return (
    <Layout>
      <div className="site-wrap">
        <Container fluid>
          <Row>
            <Col lg="9" className="p-0 border-right">
              <NavbarCourse />
            </Col>
            <Col
              lg="3"
              className="p-0 d-none d-lg-block h-100 bg-white"
              style={{
                overflowY: "scroll",
                top: 0,
                right: 0,
                position: "fixed",
                marginLeft: "auto",
              }}
            >
              <CourseMap
                course={course}
                items={items}
                currentItem={currentItem}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {JSON.stringify(course)}
    </Layout>
  );
}
