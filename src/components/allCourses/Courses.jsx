import React from "react";

import "moment/min/locales";
import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import { allCourses } from "../../../site.config";
import Icons from "components/common/Icons";

export default function BestCourses({ courses, authors }) {
  return (
    <div className="container my-5 ">
      <div className="section-title text-center text-md-left mb-2">
        <h4 className="mb-4">
          <Icons icon="books" className="mr-2 text-primary" />
          {allCourses.courses.title}
        </h4>
        <p className="text-muted mb-0 para-desc">
          {allCourses.courses.subTitle}
        </p>
      </div>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <SingleCourse
              course={course}
              author={authors.find((author) => {
                return author._id === course.course_author_id;
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
