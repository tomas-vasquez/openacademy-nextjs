import React from "react";

import "moment/min/locales";
import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import { allCourses } from "../../../site.config";
import Slider from "react-styled-carousel";
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
        <Slider
          autoSlide={3000}
          pauseOnMouseHover
          responsive={[
            { breakPoint: 1280, cardsToShow: 3 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
            { breakPoint: 760, cardsToShow: 2 },
            { breakPoint: 0, cardsToShow: 1 },
          ]}
          padding="10px 0px "
          margin="-15px"
          DotsWrapper={() => <></>}
          LeftArrow={
            <div
              style={{
                position: "absolute",
                left: 3,
                zIndex: 1,
                top: "calc(50% - 5px)",
              }}
              className="btn btn-light btn-icon btn-pills"
            >
              <Icons icon="arrowLeft" className="" />
            </div>
          }
          RightArrow={
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "calc(50% - 5px)",
              }}
              className="btn btn-light btn-icon btn-pills"
            >
              <Icons icon="arrowRight" className="" />
            </div>
          }
        >
          {courses.map((course, index) => (
            <div className="m-3 mt-0" key={index}>
              <SingleCourse
                course={course}
                author={authors.find((author) => {
                  return author._id === course.course_author_id;
                })}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
