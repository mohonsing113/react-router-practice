import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch} from "react-router-dom";
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
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
    );
  }
}


export default App;
