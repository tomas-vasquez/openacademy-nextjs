import React from "react";
import Invitation from "../../common/Invitation";
import ItemDescription from "./ItemDescription";
import Video from "./Video";

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
        <Video src={currentItem.item_video_url} />
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
