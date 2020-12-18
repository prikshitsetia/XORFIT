import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

class WebcamFeed extends React.Component {
  render() {
    let videoConstraints={
      mirrored:true
    }
    return (
      <div className={this.props.className}>
        <div ref="video">
          <Webcam videoConstraints={videoConstraints} />
        </div>
      </div>
    );
  }
}

const StyledWebcamFeed = styled(WebcamFeed)`
  display: inline-block;
  width: 640px;
  height: 480px;
  transform:scaleX(-1);
  video {
    width: 100%;
    margin-bottom: 189px;
    margin-left: -150px;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover
    {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  }
`;
export default StyledWebcamFeed;
