import React from "react";
import CourseVideo from "./CourseVideo";

export default function index({
  description,
  items,
  currentItem,
  course,
  authors,
}) {
  const author = authors.find(
    (author) => author.id === currentItem.item_author_id
  );

  return (
    <div className="site-wrap bg-white">
      {currentItem.item_type === "video" ? (
        <CourseVideo
          course={course}
          description={description}
          author={author}
          items={items}
          currentItem={currentItem}
        />
      ) : null}
    </div>
  );
}
