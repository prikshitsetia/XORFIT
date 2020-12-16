import './App.css';
import Nav from './components/Nav'
import Options from './components/Options'
import Yoga from './components/Yoga'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import React, { Component } from 'react'
class  App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render(){

    return (
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            <Route exact path='/options' render = { props => (
            <Options {...props} />
            )} />

            <Route exact path='/yoga/:pose' render = { props => (
            <Yoga {...props} />
            )} />
          </Switch>
  
             </div>

      </Router>
      
    );

  }

  
}

export default App;
