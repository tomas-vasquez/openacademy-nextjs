import classnames from "classnames";
import React from "react";
import _ from "lodash";
import Link from "next/link";

const SingleItem = ({ course, index, item, currentItem }) => {
  return (
    <li className="w-100">
      <Link
        href={
          "/" +
          course.course_short_link +
          "/" +
          item.item_title.replace(/ /g, "_")
        }
        style={{
          backgroundColor:
            currentItem.item_title === item.item_title ? "#e6f2f5" : "white",
        }}
      >
        <div className="nav-link text-muted border-bottom">
          <p className="m-0">
            <i
              className={classnames("fa fa-play mr-2", {
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
    </li>
  );
};

export default SingleItem;
