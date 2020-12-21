import React from "react";
import { CardImg } from "reactstrap";
import _ from "lodash";
import Link from "next/link";

export default function SingleCourse({ course, author }) {
  const pic_url = author.pic_url ? author.pic_url : "/img/noPic.jpg";

  return (
    <Link href={"/" + course.course_short_link}>
      <div className="card blog rounded  shadow-md overflow-hidden">
        <div className="position-relative">
          <figure className=" m-0">
            {course.course_pic_url && (
              <CardImg src={course.course_pic_url}></CardImg>
            )}
          </figure>
          <div className="overlay bg-dark"></div>
          <div className="teacher d-flex align-items-center">
            <img
              alt=""
              className="avatar avatar-md-sm rounded-circle shadow"
              src={pic_url}
            />
            <div className="ml-2">
              <h6 className="mb-0 text-white text-shadow">
                {author.name ? author.name : `@${author.user_name}`}
              </h6>
              <p className="text-light small my-0">Professor</p>
            </div>
          </div>
          <div className="course-fee bg-white text-center shadow-md rounded-circle">
            <h5 className="text-primary font-weight-bold fee">$11</h5>
          </div>
        </div>

        <div className="card-body content">
          <small>Design</small>
          <h5 className="mt-2 text-primary">
            {_.upperFirst(course.course_title)}
          </h5>
          <p className="text-muted mb-0">
            {_.upperFirst(course.course_description)}
          </p>

          {/* <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
              <li className="text-muted small">
                <i data-feather="book" className="fea icon-sm text-info"></i> 25
                Lectures
              </li>
              <li className="text-muted small ml-3">
                <i
                  data-feather="clock"
                  className="fea icon-sm text-warning"
                ></i>
                1h 30m
              </li>
              <li className="text-muted small ml-3">
                <i data-feather="eye" className="fea icon-sm text-primary"></i>
                3012
              </li>
            </ul> */}
        </div>
      </div>
    </Link>
  );
}
