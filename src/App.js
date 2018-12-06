import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage.js"
import HomePage from "./components/HomePage.js"
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">user</Link>
          </li>
          <li>
            <Link to="/users/1">user1</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/users/:userid" component={({match}) => {
            return <h1>hello user,  {match.params.userid}</h1>
          }}/>
          <Route path="/users/" component={ () =><h1>hello users</h1>}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
