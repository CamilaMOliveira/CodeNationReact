import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div data-testid="posts" className="container">
    { posts.length > 0 && posts.map((post) => (
          <Post
            postInfo={post}
            userInfo={getUserHandler(post.userId)}
            key={post.id}
          />
        ))
      }
    {/* <Post postInfo={posts} userInfo={getUserHandler}/> */}
  </div>
);

export default Posts;
