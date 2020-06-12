import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    console.log('Did Mount UsersRoute');
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div data-testid="users-route" className="container">
      <UsersList users={users}/>
    </div>
  );
};

export default UsersRoute;
