import React, { useEffect } from "react";
import Footer from "./theme/Footer";
import { Container, Col, Row } from "reactstrap";
import NavbarCourse from "components/theme/NavbarCourse";
import CourseMap from "./course/CourseMap";
import { useRouter } from "next/router";
import Navbar from "./theme/Navbar";
import PerfectScrollWraper from "./common/PerfectScrollWraper";

import { connect } from "react-redux";
import PaymentReports from "../fetchers/paymentReports";
import { setUserData } from "store/userData_store/actions";
import DB from "helpers/db";

function Layout({
  children,
  items,
  currentItem,
  course,
  userData,
  paymentReports,
  setUserData,
}) {
  const { pathname } = useRouter();

  const _loadPymentReports = () => {
    new PaymentReports().loadPymentReports(() => {});
  };

  const isNavbarDark = (pathname) => {
    return (
      (pathname !== "/login" &&
        pathname !== "/register" &&
        pathname === "/courses") ||
      pathname === "/search" ||
      pathname === "/"
    );
  };

  useEffect(() => {
    if (userData) {
      if (!paymentReports) {
        _loadPymentReports();
      }
    } else {
      if (DB.get("userData")) setUserData(DB.get("userData"));
    }
  });

  return (
    <>
      {pathname.split("/")[2] ? (
        <Container fluid>
          <Row>
            <Col
              lg={items && pathname !== "/courses" ? "9" : "12"}
              className="p-0 m-0 border-right"
            >
              <PerfectScrollWraper>
                <Container fluid className="p-0 m-0">
                  <NavbarCourse />
                  {children}
                  <Footer litle />
                </Container>
              </PerfectScrollWraper>
            </Col>
            {items ? (
              <Col
                lg="3"
                className="p-0 d-none d-lg-block h-100 bg-white"
                style={{
                  // overflowY: "scroll",
                  top: 0,
                  right: 0,
                  // position: "fixed",
                  marginLeft: "auto",
                }}
              >
                <PerfectScrollWraper>
                  <CourseMap
                    course={course}
                    items={items}
                    currentItem={currentItem}
                  />
                </PerfectScrollWraper>
              </Col>
            ) : null}
          </Row>
        </Container>
      ) : (
        <PerfectScrollWraper>
          <>
            <Navbar
              isDark={isNavbarDark(pathname)}
              sticky={pathname === "/login" || pathname === "/register"}
            />
            {children}
            {pathname !== "/login" && pathname !== "/register" && <Footer />}
          </>
        </PerfectScrollWraper>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
  paymentReports: state.paymentReports,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setUserData(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
