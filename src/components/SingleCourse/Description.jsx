import Icons from "components/common/Icons";
import CourseMap from "components/course/CourseMap";
import Link from "next/link";
import React from "react";
import { Container, Row } from "reactstrap";
import { singleCourse } from "../../../site.config";
import parser from "html-react-parser";

export default function Description({ items, course }) {
  return (
    <Container className="mt-3">
      <Row>
        <div className="co-12 col-md-6">
          <>
            <div className="section-title mt-4 my-2">
              <h3 className="mb-0">
                {singleCourse.description.descriptionTitleText}:
              </h3>
            </div>
            {parser(course.course_long_description || "")}
          </>
          {course.course_required_skills && (
            <>
              <div className="section-title mt-5 my-2">
                <h3 className="mb-0">
                  {singleCourse.description.requiredTitleText}:
                </h3>
              </div>
              <ul class="list-unstyled footer-list ">
                {course.course_required_skills.map((skill, index) => (
                  <li key={index}>
                    <Icons icon="dot" />
                    {skill.url ? (
                      <Link href={skill.url}>{skill.title}</Link>
                    ) : (
                      <p>{skill.title}</p>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="col-12 col-md-6">
          <div className="section-title mt-4 my-2">
            <h3 className="mb-0">
              {singleCourse.description.contentTitleText}:
            </h3>
          </div>
          <div className="border">
            <CourseMap course={course} items={items} />
          </div>
        </div>
      </Row>
    </Container>
  );
}
