import SocialButtons from "components/course/SocialButtons";
import React from "react";
import {
  Col,
  CardBody,
  Container,
  Row,
  Card,
  UncontrolledTooltip,
} from "reactstrap";

const getPicUrl = (profile) => {
  if (profile.pic_url) {
    return profile.pic_url;
  } else {
    return "/img/noPic.jpg";
  }
};

const ProfileCard = ({ profile, editable, handlePicPicker }) => {
  return (
    <Card className="shadow-md mb-4">
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
                id="image-123"
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
              <h2>{profile.name || "No definido"}</h2>
              <p>{profile.description || "no definido"}</p>
              <p className="mb-3">
                <small>ID: {profile._id}</small>
              </p>

              <p>
                <SocialButtons data={profile} />
              </p>
            </Col>
          </Row>
        </Container>
      </CardBody>
      <UncontrolledTooltip delay={0} target="image-123">
        cambiar imagen
      </UncontrolledTooltip>
      <input
        className="d-none"
        id="input-pic"
        type="file"
        accept="image/*"
        onChange={handlePicPicker}
      />
    </Card>
  );
};

export default ProfileCard;
