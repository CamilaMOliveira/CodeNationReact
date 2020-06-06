import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        avatar="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
        name="T'Challabla"
        username="@blackpanther"/>
      <UserPosts/>
    </div>
  );
};

export default ProfileRoute;
