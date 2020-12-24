import parser from "html-react-parser";
import Link from "next/link";
import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Results({ results }) {
  return (
    <div>
      <p>{results.length} results</p>
      {results.map((element, index) => {
        if (element.type === "course") {
          return (
            <Link key={index} href={element.link}>
              <Card className="bg-light mb-3 mx-0 border-0">
                <CardBody className="p-3">
                  <h4 className="text-primary">
                    {element.course.course_title}
                  </h4>
                  <div
                    style={{
                      maxHeight: 100,
                      overflow: "hidden",
                    }}
                  >
                    {parser(
                      element.course.course_long_description ||
                        element.course.course_description
                    )}
                  </div>
                  <small className="mb-0 text-success">{element.link}</small>
                  {/* {JSON.stringify(element)} */}
                </CardBody>
              </Card>
            </Link>
          );
        } else {
          return (
            <Link key={index} href={element.link}>
              <Card className="bg-light mb-3 mx-0 border-0">
                <CardBody className="p-3">
                  <h4 className="text-primary">{element.item.item_title}</h4>
                  <div
                    style={{
                      maxHeight: 100,
                      overflow: "hidden",
                    }}
                  >
                    {parser(element.item.item_description || "")}
                  </div>
                  <small className="mb-0 text-success">{element.link}</small>
                  {/* {JSON.stringify(element)} */}
                </CardBody>
              </Card>
            </Link>
          );
        }
      })}
    </div>
  );
}
