import React from "react";

class VideoPlayer extends React.Component {
  render() {
    return (
      <iframe
        className="m-auto"
        width="720"
        height="420"
        src={this.props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoPlayer;
