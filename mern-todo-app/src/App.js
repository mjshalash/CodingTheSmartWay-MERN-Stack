import React, { Component } from 'react';
import { BrowserROuter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/id" exact component={TodosList} />
        <Route path="/create" exact component={TodosList} />
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div>
      </Router>
    );
  }
}

export default App;
