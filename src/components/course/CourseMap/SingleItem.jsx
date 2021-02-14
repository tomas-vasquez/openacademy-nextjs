import classnames from "classnames";
import React from "react";
import _ from "lodash";
import Link from "next/link";
import Icons from "components/common/Icons";
import { getShortLink } from "utils/courses";

const SingleItem = ({ course, index, item, currentItem }) => {
  return (
    <li className="w-100">
      <div
        className="nav-link border-bottom"
        style={{
          backgroundColor:
            currentItem?.item_title === item.item_title
              ? "rgb(24 202 242 / 6%)"
              : "",
        }}
      >
        <Link
          href={
            "/" + course.course_short_link + "/" + getShortLink(item.item_title)
          }
          replace
        >
          <div style={{ cursor: "pointer" }}>
            <p className="m-0">
              <Icons
                icon="play"
                className={classnames("mr-2", {
                  "d-none": currentItem?.item_title !== item.item_title,
                })}
              />

              {`${index + 1}. ${_.upperFirst(item.item_title)}`}
            </p>
            <small className="text-muted">
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
