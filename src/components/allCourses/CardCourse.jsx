import React from "react";
import { Card, CardBody, CardImg, Media } from "reactstrap";

import moment from "moment";
import "moment/min/locales";
import _ from "lodash";
import Link from "next/link";

const formatDate = (date) => {
  return moment(date, "ISO").fromNow();
};

export default function CardCourse({ course, author }) {
  const pic_url = author.pic_url ? author.pic_url : "/img/noPic.jpg";

  return (
    <Link href={"/" + course.course_short_link}>
      <Card className="border-1 course mb-3" style={{ cursor: "pointer" }}>
        <CardBody className="p-0 ">
          <div className="h-50 align-self-stretch">
            <figure className=" m-0">
              {course.course_pic_url && (
                <CardImg src={course.course_pic_url}></CardImg>
              )}
            </figure>
            <div className="course-inner-text p-3">
              <span
                className="course-price"
                style={
                  !course.course_pic_url
                    ? {
                        top: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 4,
                      }
                    : {}
                }
              >
                free!
              </span>
              <small className="text-muted">
                {formatDate(course.created_at)}
              </small>
              <h3 className="text-primary">
                {_.upperFirst(course.course_title)}
              </h3>
              <p className="text-muted mb-0">
                {_.upperFirst(course.course_description)}
              </p>
            </div>
          </div>
        </CardBody>
        <CardBody className="d-flex border-top stats p-2">
          <Media>
            <Media left>
              {pic_url && (
                <img
                  alt="..."
                  style={{ height: 30, width: 30 }}
                  className="avatar rounded-circle m-0"
                  src={pic_url}
                />
              )}
            </Media>
            <Media body className="pl-2 my-auto">
              <Media className="mb-0 text-muted">
                {author.name ? author.name : `@${author.user_name}`}
              </Media>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Link>
  );
}
