import Icons from "components/common/Icons";
import parser from "html-react-parser";
import Link from "next/link";
import React from "react";
import { Card, CardBody } from "reactstrap";
import { search } from "../../../site.config";

export default function Results({ results }) {
  return (
    <div>
      <p>
        {results.length} {search.labelResults}
      </p>
      {results.map((element, index) => (
        <Link key={index} href={element.link}>
          <Card
            className="bg-light mb-3 mx-0 border-0 shadow-sm"
            style={{
              cursor: "pointer",
            }}
          >
            {element.type === "course" ? (
              <CardBody className="p-3">
                <h4 className="text-primary">
                  <Icons icon="books" className="mr-2" />
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
            ) : (
              <CardBody className="p-3">
                <h4 className="text-primary">
                  <Icons icon="playCircle" className="mr-2" />
                  {element.item.item_title}
                </h4>
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
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
}
