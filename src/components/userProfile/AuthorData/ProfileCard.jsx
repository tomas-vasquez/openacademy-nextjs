import SocialButtons from "components/course/SocialButtons";
import React from "react";
import { Col, CardBody, Container, Row, Card } from "reactstrap";
import { apiLinks } from "../../../../site.config";

const getPicUrl = (profile) => {
  if (profile.pic_url) {
    return apiLinks.userPicUrl + profile.pic_url;
  } else {
    return "/img/noPic.jpg";
  }
};

const ProfileCard = ({ profile, editable, handlePicPicker }) => (
  <Card className="shadow mb-4">
    <CardBody>
      <Container>
        <Row>
          <Col xs="12" lg="4" className="order-lg-2 mx-auto d-flex">
            <img
              src={getPicUrl(profile)}
              style={{
                borderRadius: "50%",
                cursor: "pointer",
                width: 180,
                height: 180,
              }}
              className="m-auto"
              onClick={() => {
                if (editable) {
                  document.getElementById("input-pic").click();
                } else {
                  alert("nooo");
                }
              }}
              alt={profile.name}
            />
          </Col>
          <Col xs="12" lg="8" className="order-lg-1">
            {/* <h2>{profile.name}</h2> */}
            <p className="mb-4">{profile.description}</p>
            <p>
              <SocialButtons data={profile} />
            </p>
          </Col>
        </Row>
      </Container>
    </CardBody>
    <input
      className="d-none"
      id="input-pic"
      type="file"
      accept="image/*"
      onChange={handlePicPicker}
    />
  </Card>
);

export default ProfileCard;
