import React, { useState } from "react";
import classname from "classnames";
import parser from "html-react-parser";
import { Container } from "reactstrap";
import CardAuthor from "./CardAuthor";
import CourseMap from "../CourseMap";
import Icons from "components/common/Icons";

const TabName = ({ title, tabName, tab, onClick, icon }) => {
  return (
    <>
      <div
        className={classname("p-2 mr-2", {
          "border-bottom2 mx-2": tab === tabName,
        })}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <Icons icon={icon} className={`mr-2`} />
        <strong className="d-none d-sm-inline">{title}</strong>
        <strong
          className={classname("d-none ", {
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
}) {
  const [tab, setTab] = useState("no");

  return (
    <>
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
        <TabName
          title="Docente"
          tab={tab}
          onClick={() => setTab("aa")}
          tabName="aa"
          icon="user"
        />
      </div>
      <Container fluid>
        <div
          className={classname("mx-auto", {
            "d-none": tab !== "no",
          })}
          style={{ maxWidth: 650 }}
        >
          {currentItem.item_description ? (
            parser(currentItem.item_description)
          ) : (
            <p>no description</p>
          )}
        </div>

        <div
          className={classname("mx-auto", {
            "d-none": tab !== "aa",
          })}
          style={{ maxWidth: 650 }}
        >
          <CardAuthor author={author} />
        </div>

        <div
          className={classname("mx-auto", {
            "d-none": tab !== "li",
          })}
        >
          <CourseMap course={course} items={items} currentItem={currentItem} />
        </div>
      </Container>
    </>
  );
}

// cla
