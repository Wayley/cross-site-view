import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainLayout>
              <div>home</div>
            </MainLayout>
          </Route>
          <Route path="/widget" exact>
            <div>widget list</div>
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
    </div>
  );
}

export default App;
