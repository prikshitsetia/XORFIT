import React from "react";
import styled from "styled-components";
import * as posenet from '@tensorflow-models/posenet';
class PoseDotter extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.translate(640,0);
    ctx.scale(-1,1);
    setInterval(() => {
      this.drawPose(ctx, canvas);
    }, 100);
  }
  toTuple({ y, x }) {
    return [y, x];
  }
  drawSegment([ay, ax], [by, bx], color, scale, ctx) {
    ctx.beginPath();
    ctx.moveTo(ax * scale, ay * scale);
    ctx.lineTo(bx * scale, by * scale);
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {
    const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
      keypoints,
      minConfidence
    );
    let strokeColor="#47EF8B";
    if(this.props.result[0])
    {
      strokeColor="#F43F3F";
    }  
    adjacentKeyPoints.forEach((keypoints) => {
      this.drawSegment(
        this.toTuple(keypoints[0].position),
        this.toTuple(keypoints[1].position),
       strokeColor,
        scale,
        ctx
      );
    });
  }

  drawPose(ctx, canvas) {
 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.font = "30px Impact";
    
    ctx.fillStyle = "#2ab7ca "
    if (this.props.result) {
      //console.log(this.props.result);
      ctx.fillStyle = this.props.result[0] ? "#47EF8B" : "#F43F3F";
    }
    if (this.props.pose) {
      for (var i = 0; i < this.props.pose.source.keypoints.length; i++) {
        let x = this.props.pose.source.keypoints[i].position["x"];
        let y = this.props.pose.source.keypoints[i].position["y"];
        ctx.fillText("●", x, y);
      }
     
    }

  }

  render() {
    return (
      <div className={this.props.className}>
        <canvas ref="canvas" width={640} height={480} />
      </div>
    );
  }
}

const StyledPoseDotter = styled(PoseDotter)`
display: block;
top: 50px;
left:150px
position: absolute;
/* top: 0; */
/* margin-left: -115px; */
z-index: 1;
-webkit-transform: rotateY(180deg);
-ms-transform: rotateY(180deg);
-webkit-transform: rotateY(180deg);
-ms-transform: rotateY(180deg);
transform: rotateY(180deg);
-webkit-transform: rotateY(180deg);
-moz-transform: rotateY(180deg);
width: 640px;
height: 480px;
text-align: center;
  canvas {
    width: 100%;
    height: 100%;
  }
`;

export default StyledPoseDotter;
