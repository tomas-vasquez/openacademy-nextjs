import React from "react";
import { apiLinks } from "../../../../site.config";

import { Col, Row } from "reactstrap";
import SocialButtons from "../SocialButtons";
import Link from "next/link";

export default function CardAuthor({ author }) {
  let pic_url;
  if (author.pic_url) {
    pic_url = apiLinks.userPicUrl + author.pic_url;
  } else {
    pic_url = "/img/noPic.jpg";
  }

  return (
    <Row>
      <Col xs="12" md="auto" className="d-flex">
        <div className="m-auto mt-2">
          <Link href={"/@" + author.user_name}>
            <img
              style={{ width: 140 }}
              src={pic_url}
              alt={author.name}
              className="rounded-circle mb-4"
            />
          </Link>
        </div>
      </Col>
      <Col xs="12" md="">
        <div className="">
          <h3 className="h5 text-muted mb-4">
            {author.name ? author.name : author.user_name}
          </h3>
          <p className="text-muted">{author.description}</p>
          <div className="d-flex d-md-block">
            <div className="mx-auto">
              <SocialButtons data={author} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
