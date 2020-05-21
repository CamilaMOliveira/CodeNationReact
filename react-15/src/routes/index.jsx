import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FeedRoute from './FeedRoute';
import UsersRoute from './UsersRoute';
import ProfileRoute from './ProfileRoute';
import NewUserRoute from './NewUserRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      {/* Feed Route => We'll show the stories list (user rounded images), and the posts */}
      <FeedRoute/>
    </Route>

    <Route exact path="/users">
      {/* UsersRoute => When we click on "Usuários" */}
    </Route>

    <Route path="/users/:username">
      {/* ProfileRoute => When we click on a username on a post */}
    </Route>

    <Route path="/newuser">
      {/* NewUserRoute => When we click on "Nova Conta" */}
    </Route>
  </Switch>
);

export default Routes;
