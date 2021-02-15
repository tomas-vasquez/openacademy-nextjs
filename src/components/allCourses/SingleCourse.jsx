import React from "react";
import { Card, CardBody, CardFooter, CardImg } from "reactstrap";
import _ from "lodash";
import Link from "next/link";

export default function CardCourse({ course, author }) {
  return (
    <Card
      className="blog shadow-md rounded-bottom rounded-top mb-0 mt-3 "
      style={{ cursor: "pointer" }}
    >
      <Link href={`/${course.course_short_link}`}>
        <a style={{ textDecoration: "none" }}>
          <CardBody className="p-0 ">
            <div>
              <figure className=" m-0">
                <CardImg
                  className="rounded-top"
                  src={
                    course.course_pic_url || require("assets/images/noPic.png")
                  }
                />
              </figure>
              <div className="d-flex">
                <span className="mt-3 ml-3 h5 text-primary mb-0 mr-auto">
                  {_.upperFirst(course.course_title)}
                </span>
                <div>
                  <span className="course-price">
                    {course.course_price > 0
                      ? `${course.course_price} $`
                      : "gratis!"}
                  </span>
                </div>
              </div>
              <div className="course-inner-text px-3 pb-3 pt-1">
                <p className="text-muted mb-0">
                  {_.upperFirst(course.course_description)}
                </p>
                <div>
                  {course.course_tags &&
                    course.course_tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge badge-xs badge-secondary mr-1"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </CardBody>
        </a>
      </Link>
      <Link href={`/user?name=${author.user_name}`}>
        <a className="text-dark">
          <CardFooter className="d-flex align-items-center p-2">
            <img
              alt={author.name}
              className="avatar avatar-md-sm rounded-circle shadow-md"
              src={author.user_pic || require("assets/images/noPic.png")}
            />
            <div className="ml-2">
              <p className="mb-0 text-dark text-shadow">{author.user_name}</p>
              <p className="small my-0 text-muted">
                {author.short_description || ""}
              </p>
            </div>
          </CardFooter>
        </a>
      </Link>
    </Card>
  );
}
