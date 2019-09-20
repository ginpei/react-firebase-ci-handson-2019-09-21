import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { appHistory } from './misc';
import AboutPage from './screens/AboutPage';
import HomePage from './screens/HomePage';

// TODO extract
const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router history={appHistory}>
      <Switch>
        <Route exact={true} path="/" component={HomePage}/>
        <Route exact={true} path="/about" component={AboutPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
