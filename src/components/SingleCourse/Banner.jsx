import Icons from "components/common/Icons";
import React from "react";
import { CardImg } from "reactstrap";
import _ from "lodash";
import Link from "next/link";
import { singleCourse } from "../../../site.config";
import { getShortLink } from "utils/courses";

export default function Banner({ author, course, currentItem }) {
  const pic_url = author.pic_url ? author.pic_url : "/img/noPic.jpg";

  return (
    <section
      className="px-0 py-5 m-0"
      style={{
        backgroundColor: "#1a274e",
        color: "white",
      }}
    >
      <div className="container mt-5">
        <div className="row pt-5 d-flex" style={{ zIndex: 1 }}>
          <div className="col-12 col-md-6">
            <div className="shape-before">
              <img
                src={require("../../assets/images/shapes/shape1.png")}
                className="img-fluid shape-img"
                alt=""
                style={{ zIndex: 0 }}
              />
              <CardImg
                className="shadow-lg"
                style={{
                  position: "relative",
                  boxShadow: "0 2px 55px rgba(47,85,212,0.3) !important",
                }}
                src={course.course_pic_url}
              ></CardImg>
            </div>
          </div>
          <div className="col-12 col-md-6 pl-lg-4 pr-lg-3">
            <div className="title-heading">
              <h2 className="my-4 mt-md-0">
                {_.upperFirst(course.course_title)}
              </h2>
              <p className="mb-4 mr-5 " data-aos="fade-up" data-aos-delay="200">
                {_.upperFirst(course.course_description)}
              </p>
            </div>
            <div className="teacher d-flex align-items-center px-2">
              <img
                alt={author.name}
                className="avatar avatar-md-sm rounded-circle shadow"
                src={pic_url}
              />
              <div className="ml-2">
                <h6 className="mb-0 text-shadow">
                  {author.name ? author.name : `@${author.user_name}`}
                </h6>
                <p className="small my-0">Professor</p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href={
                  "/" +
                  course.course_short_link +
                  "/" +
                  getShortLink(currentItem.item_title)
                }
              >
                <p
                  className="btn btn-primary w-100 heading"
                  style={{
                    fontSize: 25,
                  }}
                >
                  {singleCourse.buttonStartText}
                  <Icons icon="arrowRight" className="ml-2 arrow1" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
