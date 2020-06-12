import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ userid }) => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    console.log('Did Mount');
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userid}/posts`)
      .then((res) => res.json())
      .then(data => setPosts(data));
  }, [userid]);

  console.log(`USER POSTS => ${JSON.stringify(posts)}`);

  return (
  <div data-testid="user-posts" className="container">
    <section className="user-posts">
      {
        posts.map(post => {
          return(
            <Post isProfile="userposts" postInfo={post}></Post>
          );
        })
      }
      {/* <Post isProfile="userposts"></Post>
      <Post isProfile="userposts"></Post>
      <Post isProfile="userposts"></Post>
      <Post isProfile="userposts"></Post> */}
    </section>
  </div>
  );
};

export default UserPosts;
