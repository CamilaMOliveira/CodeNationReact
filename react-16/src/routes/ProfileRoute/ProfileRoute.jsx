import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';
import { useParams } from "react-router";

const ProfileRoute = () => {
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const { username } = useParams();
  let specific_user;

  let getUser = (username) => users.find(user => username === user.username);

  console.log(`PROFILE ROUTE => USERNAME = ${username}`);

  React.useEffect(() => {
    console.log('Did Mount');
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  console.log(`PROFILE ROUTE => USERS = ${JSON.stringify(users)}`);

  specific_user = getUser(username);

  console.log(`PROFILE ROUTE => specific_user = ${JSON.stringify(specific_user)}`);

  if(specific_user !== undefined) {
    return (
      <div data-testid="profile-route">
        <UserProfile
          avatar={specific_user.avatar}
          name={specific_user.name}
          username={`@${specific_user.username}`}/>
        <UserPosts userid={specific_user.id}/>
      </div>
    );
  }

  return (
    <div data-testid="profile-route"></div>
  );
};

export default ProfileRoute;
