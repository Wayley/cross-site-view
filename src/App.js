import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './views/Home';
import WidgetList from './views/widget/WidgetList';
import DashboardList from './views/dashboard/DashboardList';
import DashboardDetail from './views/dashboard/DashboardDetail';
import './App.css';

function App() {
  return (
    // <div className="app">
    <Router>
      <Switch>
        <Route exact path="/">
          <MainLayout children={<Home />} />
        </Route>
        <Route path="/widget" exact>
          <MainLayout children={<WidgetList />} />
        </Route>
        <Route path="/dashboard" exact>
          <MainLayout children={<DashboardList />} />
        </Route>
        <Route
          exact
          path="/dashboard/:id"
          children={<DashboardDetail />}
        ></Route>
        <Route path="/404">
          <div>404</div>
        </Route>
        <Route path="*">
          <Redirect to={{ pathname: '/404' }} />
        </Route>
      </Switch>
    </Router>
    // </div>
  );
}

export default App;
