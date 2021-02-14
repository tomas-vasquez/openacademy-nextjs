import Invitation from "components/common/Invitation";
import React from "react";
import Banner from "./Banner";
import Description from "./Description";
import MoreCourses from "./MoreCourses";

export default function SingleCourse({ courses, authors, course, items }) {
  return (
    <>
      <Banner course={course} authors={authors} items={items} />
      <Description items={items} course={course} />
      <MoreCourses courses={courses} course={course} authors={authors} />
      <Invitation />
    </>
  );
}
