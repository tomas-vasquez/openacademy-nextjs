import React from "react";
import Invitation from "../../common/Invitation";
import ItemDescription from "./ItemDescription";
import Video from "./Video";
import { getShortLink } from "utils/courses";

export default function index({ course, items, currentItem, author }) {
  const nextIndex =
    items.findIndex((value) => {
      return value._id === currentItem._id;
    }) + 1;

  const nextLink = items[nextIndex]
    ? "/" +
      course.course_short_link +
      "/" +
      getShortLink(items[nextIndex].item_title)
    : null;

  return (
    <>
      <Video src={currentItem.item_video_url} nextLink={nextLink} />
      <ItemDescription
        course={course}
        author={author}
        items={items}
        currentItem={currentItem}
      />
      <Invitation />
    </>
  );
}
