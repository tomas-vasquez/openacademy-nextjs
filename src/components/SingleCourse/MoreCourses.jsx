import React from "react";

import "moment/min/locales";
import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import Link from "next/link";

export default function MoreCourses({ courses, course, authors, author }) {
  let moreCourses = courses
    .filter((course) => {
      return author._id === course.course_author_id;
    })
    .filter((_course) => {
      return course._id !== _course._id;
    });

  if (moreCourses.length > 0) {
    return (
      <>
        <div className="container mt-5 mb-0">
          <div className="section-title mb-0">
            <h3 className="my-0">
              Mas cursos de{" "}
              <Link href=".">
                {author.name ? author.name : `@${author.user_name}`}
              </Link>
              :
            </h3>
          </div>
        </div>
        <div className="container mt-0 mb-5">
          <div className="row">
            {moreCourses.map((course, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12 mt-3">
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
      </>
    );
  } else {
    return <div className="m-5"></div>;
  }
}
