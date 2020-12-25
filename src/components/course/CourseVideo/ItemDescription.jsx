import React, { useState } from "react";
import ClassName from "classnames";
import { Container } from "reactstrap";
import CourseMap from "../CourseMap";
import Icons from "components/common/Icons";
import _ from "lodash";
import CardDescription from "./CardDescription";

const TabName = ({ title, tabName, tab, onClick, icon }) => {
  return (
    <>
      <div
        className={ClassName("p-2 mr-2", {
          "border-bottom2": tab === tabName,
        })}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <Icons icon={icon} className={`mr-2`} />
        <strong className="d-none d-sm-inline">{title}</strong>
        <strong
          className={ClassName("d-none ", {
            "d-inline d-lg-none": tab === tabName,
          })}
        >
          {title}
        </strong>
      </div>
    </>
  );
};

export default function ItemDescription({
  author,
  course,
  items,
  currentItem,
  itemIndex,
}) {
  const [tab, setTab] = useState("no");

  return (
    <>
      <div className="px-3 pt-2">
        <h4 className="mb-0 text-primary">{`${++itemIndex}- ${_.upperFirst(
          currentItem.item_title
        )}`}</h4>

        <h5 className="text-muted ml-1">{course.course_title}</h5>
      </div>

      <div className="pt-2 ml-md-4 border-bottom d-flex mb-4 mx-2">
        <div className="d-lg-none">
          <TabName
            title="Contenido"
            tab={tab}
            onClick={() => setTab("li")}
            tabName="li"
            icon="list"
          />
        </div>
        <TabName
          title="Notas"
          tab={tab}
          onClick={() => setTab("no")}
          tabName="no"
          icon="pencil"
        />
        <TabName
          title="Preguntas (999)"
          tab={tab}
          onClick={() => setTab("pr")}
          tabName="pr"
          icon="comments"
        />
      </div>
      <Container fluid>
        <div
          className={ClassName("mx-auto", {
            "d-none": tab !== "no",
          })}
          style={{ maxWidth: 800 }}
        >
          <CardDescription currentItem={currentItem} author={author} />
        </div>

        <div
          className={ClassName("mx-auto", {
            "d-none": tab !== "li",
          })}
        >
          <CourseMap course={course} items={items} currentItem={currentItem} />
        </div>

        <div
          className={ClassName("mx-auto", {
            "d-none": tab !== "pr",
          })}
        >
          (no implementado)
        </div>
      </Container>
    </>
  );
}
