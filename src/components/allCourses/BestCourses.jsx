import React from "react";

import _ from "lodash";
import { allCourses } from "../../../site.config";
import Carousel from "react-multi-carousel";
import Icons from "components/common/Icons";
import { CardImg } from "reactstrap";
import Link from "next/link";

export default function BestCourses({ courses, authors }) {
  return (
    <>
      <div className="container mt-5 mb-0">
        <div className="section-title text-center text-md-left mb-0">
          <h4 className="mb-2">
            <Icons icon="fire" className="text-danger mr-2" />
            {allCourses.bestCourses.title}
          </h4>
          <p className="text-muted mb-0 para-desc">
            {allCourses.bestCourses.subTitle}
          </p>
        </div>
      </div>
      <div className="container mb-3 px-0">
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          dotListClass="pt-2"
          responsive={{
            desktop: {
              breakpoint: { max: 4000, min: 992 },
              items: 4,
            },
            tablet: {
              breakpoint: { max: 991, min: 576 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 575, min: 0 },
              items: 1,
            },
          }}
        >
          {courses.map((course, index) => (
            <div className="mx-3 my-4 rounded shadow-md" key={`ca-${index}`}>
              <Link href={`/${course.course_short_link}`}>
                <CardImg src={course.course_pic_url}></CardImg>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
