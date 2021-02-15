import React from "react";

import SingleCourse from "components/allCourses/SingleCourse";
import { allCourses } from "../../../site.config";
import Icons from "components/common/Icons";

export default function BestCourses({ courses, authors }) {
  return (
    <div className="container-fluid my-5 px-4">
      <div className="section-title text-left mb-0">
        <h5 className="mb-2">
          <Icons icon="books" className="mr-2 text-danger" />
          {allCourses.courses.title}
        </h5>
      </div>

      <div className="row">
        {courses.map((course, index) => (
          <div
            key={index}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 px-2"
          >
            <SingleCourse
              course={course}
              author={authors.find((author) => {
                return author.id === course.course_author_id;
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
