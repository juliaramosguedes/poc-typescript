import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routes;
