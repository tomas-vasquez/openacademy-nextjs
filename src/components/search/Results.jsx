import Axios from "axios";
import Icons from "components/common/Icons";
import parser from "html-react-parser";
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { search } from "../../../site.config";

export default function Results({ results }) {
  const getPicUrl = (item) => {
    let id = "";
    let src = item.item_video_url || "";

    if (src.startsWith("https://www.youtube.com/watch")) {
      id = new URL(src).searchParams.get("v");
      return `http://img.youtube.com/vi/${id}/0.jpg`;
    } else if (src.startsWith("https://www.youtube.com/embed/")) {
      id = new URL(src).pathname.slice(7);
      return `http://img.youtube.com/vi/${id}/0.jpg`;
    } else if (src.startsWith("https://youtu.be/")) {
      id = new URL(src).pathname;
      return `http://img.youtube.com/vi/${id}/0.jpg`;
    }

    if (src.startsWith("https://vimeo.com/")) {
      id = new URL(src).pathname.slice(1);
      Axios.get(`http://vimeo.com/api/v2/video/${id}.json`).then((data) => {
        let src2 = data.data[0].thumbnail_large;
        if (document.getElementById(`image-${item._id}`))
          document.getElementById(`image-${item._id}`).src = src2;
      });

      return "/nc";
    }
  };

  return (
    <div>
      <p>
        {results.length} {search.labelResults}
      </p>
      {results.map((element, index) => (
        <Link key={index} href={element.link}>
          <a>
            <Card
              className="bg-transparent mb-4 mx-0 border-0 on-hover"
              style={{
                cursor: "pointer",
              }}
            >
              {element.type === "course" ? (
                <div className="d-block d-md-flex">
                  <CardImg
                    className="img-result-container"
                    src={element.course.course_pic_url || "/images/noPic.png"}
                  />
                  <div className="py-2 p-md-0">
                    <CardBody className="p-0 px-3">
                      <h4 className="text-primary">
                        <Icons icon="books" className="mr-2" />
                        {element.course.course_title}
                      </h4>
                      <div
                        style={{
                          maxHeight: 50,
                          overflow: "hidden",
                        }}
                      >
                        {parser(
                          element.course.course_long_description ||
                            element.course.course_description
                        )}
                      </div>
                      <small className="mb-0 text-success">
                        {element.link}
                      </small>
                    </CardBody>
                  </div>
                </div>
              ) : (
                <div className="d-block d-md-flex">
                  <CardImg
                    id={`image-${element.item._id}`}
                    className="img-result-container"
                    src={getPicUrl(element.item)}
                  />
                  <div className="py-2 p-md-0">
                    <CardBody className="p-0 px-3">
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
                      <small className="mb-0 text-success">
                        {element.link}
                      </small>
                    </CardBody>
                  </div>
                </div>
              )}
            </Card>
          </a>
        </Link>
      ))}
    </div>
  );
}
