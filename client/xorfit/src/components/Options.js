import React, { Component } from "react";
import yoga from "../yoga1.jpg";
import yogaButton from "../yoga-button.png";
import meditationButton from "../meditation-button.png";
import excerciseButton from "../excercise-button.png";
import { Link } from "react-router-dom";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      min: "0",
      sec: "0",
      time: "0",
      showMedOptions: false,
    };
  }
  handelChange = (e) => {
    this.setState({ option: e.target.name });
    if (e.target.name === "yogaButton") {
      this.props.history.push("/yoga");
    } else if (e.target.name === "excerciseButton") {
      this.props.history.push("/excercise");
    } else {
      this.setState({
        showMedOptions: true,
      });
    }
  };

  onMedClick = (e) => {
    console.log(e.target.name);
    this.props.history.push("/meditation/" + e.target.name);
  };

  setClock = (e) => {
    this.setState({
      time: this.state.min + ":" + this.state.sec,
    });
    e.target.style.display = "none";
  };

  onTimeChange = (e) => {
    // console.log(e.target)
    if (e.target.value <= 60) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      alert("Enter Valid Time");
    }
  };

  render() {
    return (
      <div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img src={yoga} className="imageAnim" alt="Yoga" />
          </div>

          <div className="col-md-6">
            <div id="alarm-dialog">
              <h2>Set Timer</h2>

              <label className="minutes">
                Minutes
                <input
                  type="number"
                  min="0"
                  max="60"
                  value={this.state.min}
                  name="min"
                  onChange={this.onTimeChange}
                  placeholder="0"
                />
              </label>
              <span id="alarm-colon">:</span>
              <label className="seconds">
                Seconds
                <input
                  type="number"
                  min="0"
                  max="60"
                  value={this.state.sec}
                  name="sec"
                  onChange={this.onTimeChange}
                  placeholder="0"
                />
              </label>

              <div className="button-holder">
                <button
                  id="alarm-set"
                  className="btn btn-alarm"
                  style={{ width: "20%" }}
                  onClick={this.setClock}
                  ref={this.myRef}
                >
                  Set
                </button>
                <button
                  id="alarm-clear"
                  className="btn btn-alarm"
                  style={{ width: "20%" }}
                  onClick={() => {
                    this.myRef.current.style.display = "inline";
                    this.setState({
                      min: 0,
                      sec: 0,
                    });
                  }}
                >
                  Clear
                </button>
              </div>
            </div>

            <div id="activity-dialog">
              <h2>Select Activity</h2>
              <button className="btn">
                <img
                  src={yogaButton}
                  height="140"
                  name="yogaButton"
                  onClick={this.handelChange}
                ></img>
              </button>
              <button className="btn">
                <img
                  src={meditationButton}
                  height="140"
                  name="meditationButton"
                  onClick={this.handelChange}
                ></img>
              </button>
              <button className="btn">
                <img
                  src={excerciseButton}
                  height="140"
                  name="excerciseButton"
                  onClick={this.handelChange}
                ></img>
              </button>
            </div>
            {this.state.showMedOptions ? (
              <div id="med-dialog">
                <h2>Select Meditation Type</h2>
                <button
                  className="btn btn-alarm"
                  name="mindfullness"
                  onClick={this.onMedClick}
                >
                  Mindfulness
                </button>
                <button
                  className="btn btn-alarm"
                  name="stress"
                  onClick={this.onMedClick}
                >
                  Stress Relieve
                </button>
                <button
                  className="btn btn-alarm"
                  name="anxiety"
                  onClick={this.onMedClick}
                >
                  Anxiety Relieve
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
