import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {

  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  let getUser = (userId) => users.find(user => userId === user.id);

  React.useEffect(() => {
    console.log('Did Mount');
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => setUsers(data));

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then((res) => res.json())
      .then(data => setStories(data));
  }, []);

  React.useEffect(() => {
    // console.log(`Use Effect iteration = ${counter}`);
    if (counter === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[counter].id}/posts`)
      .then((res) => res.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setCounter(counter + 1);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, counter]);

  // console.log(`STORIES => ${JSON.stringify(stories)}`);

  function myTest() {
    console.log('Test bla');
    return(<Loading></Loading>)
  }

  // myTest();
  return (
    <div data-testid="feed-route">
      <Stories stories={stories}/>
      {/* {console.log(`Indo para Posts`)} */}
      <Posts posts={posts} getUserHandler={getUser}/>
    </div>
  );
};

export default FeedRoute;
