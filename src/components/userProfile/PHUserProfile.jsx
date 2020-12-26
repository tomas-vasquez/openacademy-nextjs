import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class PHUserProfile extends React.Component {
  render() {
    return (
      <>
        <Container
          className="mb-5"
          style={{
            marginTop: -60,
          }}
        >
          <Row>
            <Col xs="12" lg="8" className="order-lg-2">
              <Card className="mb-4 shadow-md">
                <CardBody
                  style={{
                    padding: "30px 15px",
                  }}
                >
                  <Container>
                    <Row>
                      <Col xs="12" lg="4" className="order-lg-2 d-flex">
                        <div
                          className="ph-avatar mx-auto my-lg-auto p-0 mb-4 mb-lg-0"
                          style={{ width: 180 }}
                        />
                      </Col>
                      <Col xs="12" lg="8" className="order-lg-1">
                        <div className="ph-row">
                          <div className="ph-col-10 big" />
                          <div className="ph-col-2 empty big" />
                          <div className="ph-col-4" />
                          <div className="ph-col-8 empty" />
                          <div className="ph-col-6" />
                          <div className="ph-col-6 empty" />
                          <div className="ph-col-12" />
                          <div className="ph-col-4" />
                          <div className="ph-col-8 empty" />
                          <div className="ph-col-6" />
                          <div className="ph-col-6 empty" />
                          <div className="ph-col-12" />
                        </div>
                        <div className="row pl-2 pt-2">
                          <div className="col-auto p-0 pl-1">
                            <div className="ph-avatar" />
                          </div>
                          <div className="col-auto p-0 pl-1">
                            <div className="ph-avatar" />
                          </div>
                          <div className="col-auto p-0 pl-1">
                            <div className="ph-avatar" />
                          </div>
                          <div className="col-auto p-0 pl-1">
                            <div className="ph-avatar" />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>

              <div className="card shadow-md">
                <div className="ph-item mb-0">
                  <div className="ph-col-12">
                    <div className="ph-col-12">
                      <div className="ph-row">
                        <div className="ph-col-10 big" />
                        <div className="ph-col-2 empty big" />
                        <div className="ph-col-4" />
                        <div className="ph-col-8 empty" />
                        <div className="ph-col-6" />
                        <div className="ph-col-6 empty" />
                        <div className="ph-col-12" />
                        <div className="ph-col-4" />
                        <div className="ph-col-8 empty" />
                        <div className="ph-col-6" />
                        <div className="ph-col-6 empty" />
                        <div className="ph-col-12" />
                        <div className="ph-col-10 big" />
                        <div className="ph-col-2 empty big" />
                        <div className="ph-col-4" />
                        <div className="ph-col-8 empty" />
                        <div className="ph-col-6" />
                        <div className="ph-col-6 empty" />
                        <div className="ph-col-12" />
                        <div className="ph-col-4" />
                        <div className="ph-col-8 empty" />
                        <div className="ph-col-6" />
                        <div className="ph-col-6 empty" />
                        <div className="ph-col-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="12" lg="4" className="order-lg-1">
              <div className="card pb-0 mb-4 shadow-md">
                <div className="ph-item pb-0 mb-0">
                  <div className="ph-col-12">
                    <div className="ph-picture" />
                    <div className="ph-row">
                      <div className="ph-col-4" />
                      <div className="ph-col-8 empty" />
                      <div className="ph-col-12" />
                    </div>
                  </div>

                  <div className="ph-col-2">
                    <div className="ph-avatar" />
                  </div>

                  <div>
                    <div className="ph-row">
                      <div className="ph-col-12" />
                      <div className="ph-col-2" />
                      <div className="ph-col-10 empty" />
                      <div className="ph-col-8 big" />
                      <div className="ph-col-4 big empty" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow-md">
                <div className="ph-item pb-0 m-0">
                  <div className="ph-col-12">
                    <div className="ph-picture" />
                    <div className="ph-row">
                      <div className="ph-col-4" />
                      <div className="ph-col-8 empty" />
                      <div className="ph-col-12" />
                    </div>
                  </div>
                  <div className="ph-col-2">
                    <div className="ph-avatar" />
                  </div>
                  <div>
                    <div className="ph-row">
                      <div className="ph-col-12" />
                      <div className="ph-col-2" />
                      <div className="ph-col-10 empty" />
                      <div className="ph-col-8 big" />
                      <div className="ph-col-4 big empty" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default PHUserProfile;
