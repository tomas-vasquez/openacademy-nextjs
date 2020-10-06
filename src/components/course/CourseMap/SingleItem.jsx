import classnames from "classnames";
import React from "react";
import _ from "lodash";
import Link from "next/link";
import Icons from "components/common/Icons";

const SingleItem = ({ course, index, item, currentItem }) => {
  return (
    <li className="w-100">
      <div
        className="nav-link text-muted border-bottom"
        style={{
          backgroundColor:
            currentItem.item_title === item.item_title ? "#e6f2f5" : "white",
        }}
      >
        <Link
          href={
            "/" +
            course.course_short_link +
            "/" +
            item.item_title.replace(/ /g, "_")
          }
        >
          <div style={{ cursor: "pointer" }}>
            <p className="m-0">
              <Icons
                icon="play"
                className={classnames("mr-2", {
                  "d-none": currentItem.item_title !== item.item_title,
                })}
              />

              {`${index + 1}. ${_.upperFirst(item.item_title)}`}
            </p>
            <small>
              {item.item_type === "video" ? (
                <>video</>
              ) : item.item_type === "test" ? (
                <>
                  <i className="fa fa-pencil mr-2" />
                  examen
                </>
              ) : null}
            </small>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default SingleItem;
