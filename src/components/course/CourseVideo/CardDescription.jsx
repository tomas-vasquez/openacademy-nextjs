import React from "react";
import parser from "html-react-parser";

export default function CardDescription({ currentItem, author }) {
  const pic_url = author.pic_url ? author.pic_url : "/img/noPic.jpg";

  return (
    <div>
      <div className="teacher d-flex align-items-center mb-3">
        <img
          alt={author.name}
          className="avatar avatar-md-sm rounded-circle shadow"
          src={pic_url}
        />
        <div className="ml-2">
          <h6 className="mb-0 text-shadow">
            <strong>
              {author.name ? author.name : `@${author.user_name}`}
            </strong>
          </h6>
          <p className="small my-0">Professor</p>
        </div>
      </div>
      {currentItem.item_description ? (
        parser(currentItem.item_description)
      ) : (
        <p>no description</p>
      )}
    </div>
  );
}
