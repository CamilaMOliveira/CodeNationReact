import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  return (
    <div>
      <UserProfile
        avatar="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
        name="T'Challa"
        username="@blackpanther"/>
      <UserPosts/>
    </div>
  );
};

export default ProfileRoute;
