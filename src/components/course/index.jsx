import React from "react";
import CourseVideo from "./CourseVideo";

export default function index({
  author,
  description,
  items,
  currentItem,
  course,
  itemIndex,
}) {
  return (
    <div className="site-wrap bg-white">
      {currentItem.item_type === "video" ? (
        <CourseVideo
          course={course}
          description={description}
          author={author}
          items={items}
          currentItem={currentItem}
          itemIndex={itemIndex}
        />
      ) : null}
    </div>
  );
}
