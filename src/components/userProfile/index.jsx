import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";

import Certificates from "components/userProfile/Certificates";
import AuthorData from "components/userProfile/AuthorData";
import Header from "./Hero";
import PHUserProfile from "./PHUserProfile";

import app from "myFirebase";
import { doc, getDoc } from "firebase/firestore";

export default function index() {
  const [profile, setProfile] = useState(null);

  const myFunction = async () => {
    const urlSearchParams = new URLSearchParams(document.location.search);
    const userId = urlSearchParams.get("id");

    const db = app.firestore();
    const docRef = doc(db, "profiles", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const profile = docSnap.data();
      setProfile(profile);
    }
  };

  useEffect(() => {
    myFunction();
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
