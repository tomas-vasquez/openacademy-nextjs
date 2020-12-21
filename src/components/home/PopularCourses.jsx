import React, { Component } from "react";

import "moment/min/locales";
import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import { popularCourses } from "../../../site.config";

export default class extends Component {
  render() {
    const { courses, authors } = this.props;

    return (
      <div className="container mt-5 pt-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h2 className="mb-4">{popularCourses.title}</h2>
              <p className="text-muted para-desc mb-0 mx-auto">
                {popularCourses.subTitle}
              </p>
            </div>
          </div>
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
}
