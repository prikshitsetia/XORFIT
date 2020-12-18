import React from "react";
import styled from "styled-components";
import StyledPoseDetails from "../poseDetails";

class PoseSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePose: null,
      details: null,
      src: null,
      displayAccordion: false,
      className: undefined
    };
    this.displayAccordion = this.displayAccordion.bind(this);
  }

  handleChoice(id, details, src) {
    this.setState({
      activePose: id,
      details: details,
      src: src,
    },
    () => {
      console.log("lol")
    });
    this.props.getChosenPose(id);
  }

  displayAccordion() {
    this.setState(prevState => ({
      displayAccordion: !prevState.displayAccordion
    }));
  }

  render() {
    const {activePose} = this.state;
    const poseInfo = this.state;
    let accordion = null;

    if (this.state.displayAccordion) {
      accordion = (
        <div className={this.props.className}>
        <ul className="accordion">
          {POSES.map(({ id, pose, details, src }) => (
            <li className={this.state.activePose === id ? "active" : "false" } key={id} onClick={() => this.handleChoice(id, details, src)}>
                <div className="pose-title">
                  <h2>{pose}</h2>
                </div>
              {id === activePose && details && <StyledPoseDetails poseInfo={poseInfo} />}
            </li>
          ))}
          </ul>
        </div>
      )
    }
    return (
      <div className={this.props.className} id="poseSelector">
        <i className="material-icons md-48" onClick={this.displayAccordion}>{this.state.displayAccordion ? "highlight_off" : "play_circle_outline"}</i>
        {accordion}
      </div>
    );
  }
}

const POSES = [
  {
    id: "Utkatasana",
    pose: "Utkatasana",
    details: "Utkatasana clearly works the muscles of the arms and legs, but it also stimulates the diaphragm and heart",
    src: "009-chair.svg"
  },
  {
    id: "VeerabhadraAsana II",
    pose: "VeerabhadraAsana II",
    details: "VeerabhadraAsana II strengthens the legs, opens the hips and chest. The pose develops concentration, balance and groundedness. This pose improves circulation and respiration and energizes the entire body",
    src: "warrior.svg"
  },
  {
    id: "UtkatakonaAsana",
    pose: "UtkatakonaAsana",
    details: "UtkatakonaAsana to help you harness the forces of the Universe while stretching and toning your core. This pose helps each of us connect to our inherent inner goddess, finding a common space with this powerful feminine energy.",
    src: "goddess.svg"
  },
  {
    id: "VrakshaAsana",
    pose: "VrakshaAsana",
    details: "VrakshaAsana increases balance, focus, memory and concentration and strengthens the ankles and knees.",
    src: "tree.svg"
  },
  {
    id: "Tadasana",
    pose: "Tadasana",
    details: "The foundation of all standing poses, Tadasana makes a great a starting position, resting pose, or tool to improve posture.",
    src: "standing-female.svg"
  }
];

const StyledPoseSelector = styled(PoseSelector)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato';
     -webkit-font-smoothing: antialiased;
  	-moz-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-rendering: optimizelegibility;
  }

  ul {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
  
  }

  li {
 
    padding: 20px;
    background: #A33265;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
      background: #FF8F4F;

      .pose-title {
        color: #A33265;
      }
    }

    &.active {
      background: #FF8F4F;
      cursor: default;
     

      h2 {
        color: #A33265;
      }
    }

    .pose-title {
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 0;
      text-align: center;
      color: #FF8F4F;

      h2 {
        margin: 0;
        white-space: nowrap;
      }
    }
  }

  .material-icons.md-48 {
    padding: 50px;
    font-size: 60px;
    z-index: 3;
    position: absolute;
    color:  #2ab7ca ;
    cursor:  pointer;
  }
`;
export default StyledPoseSelector;
