import React from "react";
import "./ChannelRow.css";
import Avator from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  Channel,
  subs,
  noOfVideos,
  verified,
  description,
}) {
  return (
    <div className="channeRow">
      <Avator className="channelRow__logo" src={image} alt={Channel} />

      <div className="channelRow__text">
        <h4>
          {Channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
