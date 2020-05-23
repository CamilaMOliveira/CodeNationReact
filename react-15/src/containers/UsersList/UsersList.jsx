import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {
  return (
    <section data-testid="users-list" className="users-list">
      <User/>
    </section>
  )
};

export default UsersList;
