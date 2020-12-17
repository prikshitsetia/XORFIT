import Nav from "./components/Nav";
import Options from "./components/Options";
import Yoga from "./components/Yoga";
import Meditation from "./components/Meditation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home";
import Register from "./components/Register";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => <Home {...props} />} />

          <Switch>
            <Route
              exact
              path="/register"
              render={(props) => <Register {...props} />}
            />

            <Route
              exact
              path="/options"
              render={(props) => <Options {...props} />}
            />

            <Route
              exact
              path="/yoga/:pose"
              render={(props) => <Yoga {...props} />}
            />

            <Route
              exact
              path="/meditation"
              render={(props) => <Meditation {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
