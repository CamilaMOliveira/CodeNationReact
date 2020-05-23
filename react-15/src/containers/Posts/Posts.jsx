import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div data-testid="posts" className="container">
    <Post/>
  </div>
);

export default Posts;
