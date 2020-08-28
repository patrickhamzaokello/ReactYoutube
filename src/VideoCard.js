import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MoreVert from "@material-ui/icons/MoreVert";

import "./VideoCard.css";

function VideoCard({ thumbnail, channel, owner, title, views, Timestamp }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={thumbnail} alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard_avatar" alt={owner} src={owner} />

        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>

          <p>
            {views}.{Timestamp}
          </p>
        </div>

        <MoreVert className="VideoMore" />
      </div>
    </div>
  );
}

export default VideoCard;
