import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

import Certificates from "components/userProfile/Certificates";
import AuthorData from "components/userProfile/AuthorData";
import Controller_Profile from "fetchers/Profile";
import Header from "./Hero";
import PHUserProfile from "./PHUserProfile";

export default class user extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      profile: null,
    };
    this.profile = new Controller_Profile();
  }

  loadData = () => {
    const urlSearchParams = new URLSearchParams(document.location.search);
    const userName = urlSearchParams.get("name");

    if (this.state.profile)
      this.setState({
        profile: null,
      });

    this.profile.getProfile(userName, (response, error) => {
      this.setState({
        username: userName,
        profile: response
          ? response.user_data
            ? response.user_data
            : ""
          : null,
        error: error,
      });
    });
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    const urlSearchParams = new URLSearchParams(document.location.search);
    const userName = urlSearchParams.get("name");

    if (this.state.username !== userName) this.loadData();
  }

  render() {
    if (this.state.profile)
      return (
        <>
          <Header
            className="mt-2 mb-5"
            title={`Hi! mi name is ${
              this.state.profile.name
                ? this.state.profile.name.split(" ")[0]
                : this.state.profile.user_name
            }`}
          />
          <Container
            style={{
              marginTop: "-60px",
            }}
          >
            <Row>
              <Col xs="12" lg="8" className="order-lg-2">
                <AuthorData profile={this.state.profile} />
              </Col>
              <Col xs="12" lg="4" className="order-lg-1">
                <Certificates />
              </Col>
            </Row>
          </Container>
        </>
      );
    else
      return (
        <>
          <Header title={`Hi! mi name is...`} />

          <PHUserProfile />
        </>
      );
  }
}
