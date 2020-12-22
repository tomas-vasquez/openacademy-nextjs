import React from "react";

import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import { allCourses } from "../../../site.config";

import Carousel from "react-multi-carousel";

import Icons from "components/common/Icons";

export default function BestCourses({ courses, authors }) {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="section-title text-center text-md-left mb-0">
          <h4 className="mb-4">
            <Icons icon="fire" className="text-danger mr-2" />
            {allCourses.bestCourses.title}
          </h4>
          <p className="text-muted mb-0 para-desc">
            {allCourses.bestCourses.subTitle}
          </p>
        </div>
      </div>
      <div className="container mb-4">
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          ssr={true}
          responsive={{
            desktop: {
              breakpoint: { max: 4000, min: 992 },
              items: 3,
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
            <div className="m-3 mt-0" key={`ca-${index}`}>
              <SingleCourse
                course={course}
                author={authors.find((author) => {
                  return author._id === course.course_author_id;
                })}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
