import React, { Component } from 'react'
import PoseWrapper from "./components/poseWrapper";
import "./App.css";
import StyledWebcamFeed from "./components/webcamFeed";
export default class XorFit extends Component {
    render() {
        return (
          
         <React.Fragment>
          <StyledWebcamFeed />
          <PoseWrapper />
        </React.Fragment>
         
        )
    }
}
