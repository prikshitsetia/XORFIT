import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import Pose from "../../lib/posenetWrapper";
import StyledPoseSelector from "../poseSelector";
import StyledChecklist from "../checklist";
import StyledPoseDotter from "../poseDotter";

class PoseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      activePose: null,
      pose: null,
      poseImage:null,
    };
    this.setResult = this.setResult.bind(this);
    this.getChosenPose = this.getChosenPose.bind(this);
  }

  componentDidMount() {
    this.runPosenet();
  }

  setResult(wrappedPose) {
    var activePose = this.state.activePose;
    this.setState(function(state) {
      return {
        pose: wrappedPose
      };
    });
    switch (activePose) {
      case "Utkatasana":
        this.setState({ result: wrappedPose.isChairPose() ,poseImage:"009-chair.svg"});
        break;
      case "VeerabhadraAsana II":
        this.setState({ result: wrappedPose.isWarrior2(),poseImage:"warrior.svg" });
        break;
      case "UtkatakonaAsana":
        this.setState({ result: wrappedPose.isGoddess() ,poseImage:"goddess.svg"});
        break;
      case "VrakshaAsana":
        this.setState({ result: wrappedPose.isTreePose(),poseImage:"tree.svg" });
        break;
      case "Tadasana":
        this.setState({ result: wrappedPose.isMountainPose(),poseImage:"standing-female.svg" });
        break;
      default:
    }
  }

  getChosenPose(chosenPose) {
    this.setState(
      {
        activePose: chosenPose
      },
      () => {}
    );
  }

  runPosenet() {
    var setResult = this.setResult;
    setInterval(function() {
      let imageElement = document.getElementsByTagName("video")[0];
      let imageScaleFactor = 0.5;
      let outputStride = 32;
      //let arch='ResNet50';
      let flipHorizontal = true;
      console.log(imageElement);
      if(imageElement.readyState===4)
      {
        posenet
        .load()
        .then(function(net) {
          return net.estimateSinglePose(
            imageElement,
            imageScaleFactor,
            flipHorizontal,
            outputStride,
         //  arch
          );
        })
        .then(function(pose) {
          var wrappedPose = new Pose(pose);
        
          setResult(wrappedPose);
        });
      }
     
    }, 500);
  }

  render() {
    // console.log("pWp" + this.state.pose);
    // console.log("pWr" + this.state.result);
    return (
      <React.Fragment>
        <StyledPoseSelector getChosenPose={this.getChosenPose} />
        <StyledChecklist result={this.state.result} poseImage={this.state.poseImage} activePose={this.state.activePose}/>
        <StyledPoseDotter result={this.state.result} pose={this.state.pose} />
      </React.Fragment>
    );
  }
}

export default PoseWrapper;

//
