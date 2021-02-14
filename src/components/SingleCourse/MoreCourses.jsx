import React from "react";

import _ from "lodash";
import SingleCourse from "components/allCourses/SingleCourse";
import Link from "next/link";

export default function MoreCourses({ courses, course, authors }) {
  let moreCourses = courses
    .filter((_course) => {
      return course.course_author_id === _course.course_author_id;
    })
    .filter((_course) => {
      return course.id !== _course.id;
    });

  const author = authors.find(
    (author) => author.id === course.course_author_id
  );

  if (moreCourses.length > 0) {
    return (
      <>
        <div className="container mt-5 mb-0">
          <div className="section-title mb-0">
            <h3 className="my-0">
              Mas cursos de <Link href=".">{`${author.user_name}`}</Link>:
            </h3>
          </div>
        </div>

        <div className="container mt-0 mb-5">
          <div className="row">
            {moreCourses.map((course, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12 mt-3">
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
      </>
    );
  } else {
    return <div className="m-5"></div>;
  }
}
