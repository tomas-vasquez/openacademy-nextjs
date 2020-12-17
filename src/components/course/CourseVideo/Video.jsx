import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Vimeo from "@u-wave/react-vimeo";
import { useRouter } from "next/router";

const Video = ({ src, nextLink }) => {
  let id = null;
  const [videoTransition, setVideoTransition] = useState(null);
  const router = useRouter();

  const handlePlay = () => {
    videoTransition && clearTimeout(videoTransition);
  };

  const handleEnd = () => {
    setVideoTransition(
      setTimeout(() => {
        router.replace(nextLink);
      }, 2500)
    );
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  if (src.startsWith("https://www.youtube.com/watch")) {
    id = new URL(src).searchParams.get("v");
  } else if (src.startsWith("https://www.youtube.com/embed/")) {
    id = new URL(src).pathname.slice(7);
  } else if (src.startsWith("https://youtu.be/")) {
    id = new URL(src).pathname;
  }

  if (src.startsWith("https://vimeo.com/")) {
    id = new URL(src).pathname.slice(1);
  }

  return (
    <>
      <div className="video-container shadow">
        {(src.startsWith("https://www.youtube") ||
          src.startsWith("https://youtu.be")) && (
          <YouTube
            videoId={id}
            opts={{
              playerVars: {
                autoplay: 1,
              },
            }}
            onPlay={handlePlay}
            onEnd={handleEnd}
            onReady={_onReady}
          />
        )}
        {src.includes("vimeo") && (
          <Vimeo
            height="420"
            width="720"
            video={id}
            autoplay
            onPlay={handlePlay}
            onEnd={handleEnd}
          />
        )}
      </div>
    </>
  );
};

export default Video;
