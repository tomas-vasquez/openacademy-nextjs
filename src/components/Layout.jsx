import React from "react";
import Particles from "./common/Particles";
import Footer from "./theme/Footer";
import { Container, Col, Row } from "reactstrap";
import NavbarCourse from "components/theme/NavbarCourse";
import CourseMap from "./course/CourseMap";
import { useRouter } from "next/router";
import Header from "../components/common/header";
import Navbar from "./theme/Navbar";

export default function Layout({
  title,
  children,
  items,
  currentItem,
  course,
}) {
  const { pathname } = useRouter();

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            lg={items && pathname !== "/courses" ? "9" : "12"}
            className="p-0 border-right"
          >
            {pathname !== "/login" &&
            pathname !== "/register" &&
            pathname !== "/user" &&
            pathname !== "/" ? (
              <NavbarCourse />
            ) : (
              <Navbar />
            )}

            {children}
            <Footer />
          </Col>
          {items ? (
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
          ) : null}
        </Row>
      </Container>
    </>
  );
}
