import React from "react";
import styled from "styled-components";

const Criteria = props => (
  <li className={props.check[0].toString()}>
    <i className="material-icons">
      {props.check[0] ? "check_circle" : "highlight_off"}
    </i>
    {props.check[1]}
  </li>
);

const Checklist = props => (
  <div className={props.className}>

    <div className={props.result ? (props.result[0]+"Result") : "noResult"}>
      {/* <div className="topBuffer"></div> */}
      {/* <div className="sunIcon"><img src="sun.png" alt="Sun"/></div> */}
      <div className="moveName">
        {props.activePose && props.activePose}
      </div>
      {props.poseImage&& <img alt="yoga-pose" src={props.poseImage}/>}
     
    </div>
    <div className="listHolder">
      <ul>
        {props.result &&
          props.result[1].map((check_i, index) => <Criteria key={index} check={check_i} />)}
      </ul>
    </div>
   
  
  </div>
);

const StyledChecklist = styled(Checklist)`

@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

text-align: center;
font-size: 1.5em;
margin-left: 290px;
margin-bottom: 3px;
display: inline-block;
width: 24.9%;
height: 100%;
vertical-align: bottom;
overflow: hidden;
background-color:  #fed766 ;

a {
  color: black;
  text-decoration: none;
}

.logoholder {
  border-radius: 50px 0px 0px 0px;
  padding-top: 10px;
  padding-right: 30px;
  text-align: right;
}

.links {
  height: 5%;
  padding-right: 47px;
  text-align: right;
  font-size: 0.5em;
}

img {
  width: 67%;
}

.topBuffer {
  height: 10%;
}

.sunIcon {
  left: 33%;
  top: 15%;
  width: 200px;
  position: absolute;
  z-index: 2;
  opacity: 0;
}

.trueResult .sunIcon{
  animation: spin 4s linear infinite;
  z-index: 0;
  opacity: 1;
}

.trueResult{
  letter-spacing: 3px;
  position: relative;
  color: #29CE6B;
  height: 33%;
}

.noResult {
  letter-spacing: 3px;
  position: relative;
  height: 33%;
}

.falseResult{
  letter-spacing: 3px;
  position: relative;
  color: #F43F3F;
  height: 33%;
}

.moveName {
  letter-spacing: 3px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  padding: 10%;
}

.listHolder {
  text-align: left;
  height: 50%;
  margin-top:90px;
}

  li {
    font-size: 0.9em;
    padding-top: 25px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    list-style: none;
  }

  li.false {
    color: #F43F3F;
  }
  li.true {
    color: #29CE6B;
  }

  i {
    margin-right: 10px;
    font-size: 80%;
    font-size: 200%;
    vertical-align: middle;
  }
`;

export default StyledChecklist;
