import React, { Component } from "react";
import { Card, CardBody, CardImg, Media } from "reactstrap";

import moment from "moment";
import "moment/min/locales";
import _ from "lodash";
import Link from "next/link";
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
            <SingleCourse
              key={index}
              course={course}
              author={authors.find((author) => {
                return author._id === course.course_author_id;
              })}
            />
          ))}
        </div>
      </div>
    );
  }
}
