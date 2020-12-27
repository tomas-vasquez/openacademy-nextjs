import React from "react";

import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import { allCourses } from "../../../site.config";
import Icons from "components/common/Icons";

export default function BestCourses({ courses, authors }) {
  return (
    <div className="container-fluid mt-5 mb-0 mx-md-1">
      <div className="section-title text-left mb-0">
        <h5 className="mb-2">
          <Icons icon="books" className="mr-2 text-danger" />
          {allCourses.courses.title}
        </h5>
        {/* <p className="text-muted mb-0 para-desc">
          {allCourses.courses.subTitle}
        </p> */}
      </div>
      <div className="card-columns mt-4">
        {courses.map((course, index) => (
          <div key={index} className="mx-1 mb-4">
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
