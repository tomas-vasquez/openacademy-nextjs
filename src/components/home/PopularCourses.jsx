import React, { Component } from "react";

import "moment/min/locales";
import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import { popularCourses } from "../../../site.config";

export default class extends Component {
  render() {
    const { courses, authors } = this.props;

    return (
      <div className="mt-5 p-0 mx-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4">
              <h2 className="mb-2">{popularCourses.title}</h2>
              <p className="text-muted para-desc mb-0 mx-auto">
                {popularCourses.subTitle}
              </p>
            </div>
          </div>
        </div>

        <div className="card-columns mt-4">
          {courses.map((course, index) => (
            <div key={index} className="mb-4">
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
}
