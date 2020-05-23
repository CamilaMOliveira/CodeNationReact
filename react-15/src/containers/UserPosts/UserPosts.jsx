import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div data-testid="user-posts" className="container">
    <section class="user-posts">
      <Post postInfo="userposts"></Post>
      <Post postInfo="userposts"></Post>
      <Post postInfo="userposts"></Post>
      <Post postInfo="userposts"></Post>
    </section>
  </div>
);

export default UserPosts;
