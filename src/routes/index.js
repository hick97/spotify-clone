import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Browser from '../pages/Browser';
import Playlist from '../pages/Playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/register" component={SignUp} />
    <Route exact path="/" component={Browser} isPrivate />
    <Route path="/playlists/:id" component={Playlist} isPrivate />
  </Switch>
);

export default Routes;
