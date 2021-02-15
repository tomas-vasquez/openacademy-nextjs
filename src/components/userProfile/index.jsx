import React, { Component, useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";

import Certificates from "components/userProfile/Certificates";
import AuthorData from "components/userProfile/AuthorData";
import Header from "./Hero";
import PHUserProfile from "./PHUserProfile";
import { useFirestore } from "reactfire";

export default function index() {
  const fireStore = useFirestore();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(document.location.search);
    const userId = urlSearchParams.get("id");

    fireStore
      .collection("profiles")
      .doc(userId)
      .onSnapshot((_profile) => {
        const profile = _profile.data();
        setProfile(profile);
      });
  }, []);

  if (!profile) {
    return (
      <>
        <Header title={`Hi! mi name is...`} />
        <PHUserProfile />
      </>
    );
  }

  return (
    <>
      <Header
        className="mt-2 mb-5"
        title={`Hi! mi name is ${profile.user_name}`}
      />
      <Container
        style={{
          marginTop: "-60px",
        }}
      >
        <Row>
          <Col xs="12" lg="8" className="order-lg-2">
            <AuthorData profile={profile} />
          </Col>
          <Col xs="12" lg="4" className="order-lg-1">
            <Certificates />
          </Col>
        </Row>
      </Container>
    </>
  );
}
