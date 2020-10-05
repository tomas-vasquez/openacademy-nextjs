import React from "react";
import Invitation from "../Invitation";
import ItemDescription from "./ItemDescription";

export default function index({
  course,
  description,
  items,
  currentItem,
  author,
}) {
  return (
    <>
      <div className="video-container shadow d-flex">
        <video
          className="m-auto"
          controls
          src={currentItem.item_video_url}
          width="720"
          height="420"
          autoPlay
        />
      </div>
      <ItemDescription
        course={course}
        author={author}
        items={items}
        // itemIndex={this.props.itemIndex}
        description={description}
        currentItem={currentItem}
      />
      <Invitation />
    </>
  );
}
