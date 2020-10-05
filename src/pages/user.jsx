import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

import Layout from "components/Layout";
import Certificates from "components/userProfile/Certificates";
import AuthorData from "components/userProfile/AuthorData";

export default class user extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      profile: {},
    };
  }

  componentDidMount() {
    this.setState({ username: document.location.search });
  }

  render() {
    return (
      <Layout title="Hi! mi name is ...">
        <Container className="mt-5">
          <Row>
            <Col xs="12" lg="8" className="order-lg-2">
              <AuthorData profile={this.state.profile} />
            </Col>
            <Col xs="12" lg="4" className="order-lg-1">
              <Certificates />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
