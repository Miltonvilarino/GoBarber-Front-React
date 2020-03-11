import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import SingIn from '../pages/Singin';
import SingUp from '../pages/SingUp';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
