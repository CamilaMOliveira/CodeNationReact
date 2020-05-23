import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  return (
    <div data-testid="users-route" className="container">
      <UsersList/>
    </div>
  );
};

export default UsersRoute;
