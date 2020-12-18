import React from "react";
import styled from "styled-components";

class PoseDetails extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img alt="yoga-pose" src={this.props.poseInfo.src}/>
        <p>{this.props.poseInfo.details}</p>
      </div>
    );
  }
}

const StyledPoseDetails = styled(PoseDetails)`
  align-items: center;
  padding: 0;
  text-align:center;

  p {
    color: #A33265;
    padding: 40px 20% 0 20%;
    font-weight: bold;
  }

  img {
    width: 300px;
    height:300px
  }

`
;

export default StyledPoseDetails;
