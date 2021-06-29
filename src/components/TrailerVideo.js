import React from "react";
import YouTube from "react-youtube";
const TrailerVideo = ({ trailerURL }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // return <YouTube videoId={trailerURL} opts={opts} />;
  return <iframe src={trailerURL} title="trailer" width="100%" height="380" />;
};

export default TrailerVideo;
