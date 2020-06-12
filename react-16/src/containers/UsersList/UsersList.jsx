import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {
  console.log(`UsersList = ${JSON.stringify(users)}`);
  return (
    <section data-testid="users-list" className="users-list">
      {
        users.map(user => {
          return (
            <User infoUser={user}/>
          );
        })
      }
    </section>
  )
};

export default UsersList;
