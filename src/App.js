import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>home</div>
        </Route>
        <Route path="/dashboard" exact>
          <div>dashboard</div>
        </Route>
        <Route path="/dashboard/:id" exact>
          <div>dashboard detail</div>
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
