import React from "react";

import { allCourses } from "../../../site.config";
import Carousel from "react-multi-carousel";
import Icons from "components/common/Icons";
import { CardImg } from "reactstrap";
import Link from "next/link";

export default function BestCourses({ courses }) {
  return (
    <>
      <div className="container-fluid mt-5 mb-0 mx-md-1">
        <div className="section-title text-left mb-0">
          <h5 className="mb-1">
            <Icons icon="fire" className="text-danger mr-2" />
            {allCourses.bestCourses.title}
          </h5>
        </div>

        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={false}
          responsive={{
            desktop: {
              breakpoint: { max: 4000, min: 992 },
              items: 5,
            },
            tablet: {
              breakpoint: { max: 991, min: 576 },
              items: 3,
            },
            mobile: {
              breakpoint: { max: 575, min: 0 },
              items: 1,
            },
          }}
        >
          {courses.map((course, index) => (
            <div className="mx-2 my-4" key={`ca-${index}`}>
              <Link href={`/${course.course_short_link || ""}`}>
                <a>
                  <CardImg
                    className="rounded-md shadow-md"
                    src={
                      course.course_pic_url ||
                      require("assets/images/noPic.png")
                    }
                  />
                </a>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
