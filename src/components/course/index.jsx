import React from "react";
import CourseVideo from "./CourseVideo";
import Layout from "../Layout";

export default function index({
  author,
  description,
  children,
  items,
  currentItem,
  course,
}) {
  return (
    <Layout
      children={children}
      items={items}
      currentItem={currentItem}
      course={course}
    >
      <div className="site-wrap bg-white">
        {currentItem.item_type === "video" ? (
          <CourseVideo
            course={course}
            description={description}
            author={author}
            items={items}
            currentItem={currentItem}
            // itemIndex={itemIndex}
          />
        ) : null}
      </div>
    </Layout>
  );
}
