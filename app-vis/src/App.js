import React, { Component } from 'react';
// import logo from './logo.svg';
import {Col, Container, Row} from 'reactstrap';
import '../src/components/styles/App.css';
import {Link, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/logout" component={Logout}/>
      </Switch>
    );
  }
}

const B = () => {
  return(
    <div>
      <h1>This is B Page</h1>
      <Link to="/">A Component</Link>
    </div>
  )
}

const A = () => {
  return(
    <div>
      <h1>This is A Page</h1>
      <Link to="/b">B Component</Link>
    </div>
  )
}

export default App;