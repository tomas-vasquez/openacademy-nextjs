import React from "react";
import { Card, CardBody, CardFooter, CardImg, Media } from "reactstrap";
import _ from "lodash";
import Link from "next/link";
import CustomLinkWrapper from "components/common/CustomLinkWrapper";

export default function CardCourse({ course, author }) {
  const pic_url = author.pic_url ? author.pic_url : "/img/noPic.jpg";

  return (
    <Card
      className="border-1 course mb-5 shadow-md"
      style={{ cursor: "pointer" }}
    >
      <Link href={`/${course.course_short_link}`}>
        <CustomLinkWrapper>
          <CardBody className="p-0 ">
            <div>
              <figure className=" m-0">
                {course.course_pic_url && (
                  <CardImg src={course.course_pic_url}></CardImg>
                )}
              </figure>
              <div className="d-flex">
                <span className="mt-3 ml-3 h5 text-primary mb-0 mr-auto">
                  {_.upperFirst(course.course_title)}
                </span>
                <div>
                  <span className="course-price">gratis!</span>
                </div>
              </div>
              <div className="course-inner-text px-3 pb-3 pt-1">
                <p className="text-muted mb-0">
                  {_.upperFirst(course.course_description)}
                </p>
                <div>
                  <span className="badge badge-xs badge-secondary mr-1">
                    Design
                  </span>
                  <span className="badge badge-xs badge-secondary mr-1">
                    Design
                  </span>
                  <span className="badge badge-xs badge-secondary mr-1">
                    Design
                  </span>
                </div>
              </div>
            </div>
          </CardBody>
        </CustomLinkWrapper>
      </Link>
      <Link href={`/user?name=${author.user_name}`}>
        <CustomLinkWrapper>
          <CardFooter className="d-flex align-items-center p-2">
            <img
              alt={author.name}
              className="avatar avatar-md-sm rounded-circle shadow-md"
              src={pic_url}
            />
            <div className="ml-2">
              <p className="mb-0 text-shadow">
                {author.name ? author.name : `@${author.user_name}`}
              </p>
              <p className="small my-0 text-muted">
                {author.short_description || ""}
              </p>
            </div>
          </CardFooter>
        </CustomLinkWrapper>
      </Link>
    </Card>
  );
}
