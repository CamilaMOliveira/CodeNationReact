import React, { useState } from "react";

import Story from '../../components/Story';

import { Link } from 'react-router-dom';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  const [users, setUsers] = useState([]);
  const [story, setStory] = useState([]);
  const [user, setUser] = useState([]);
  let getUser = (id) => users.find(user => id === user.id);

  React.useEffect(() => {
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users`)
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  // console.log(`STORIES 2 => ${JSON.stringify(stories)}`);

  // if(user !== undefined) {
    console.log(`USER (STORIES) => ${JSON.stringify(users)}`);
    // console.log(`USER (STORIES) USERID => ${stories.userId}`);
  // }

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">
          {
            stories.map(story => {
                console.log(`Story ID = ${story.id}`);

                return (
                  <button className="user__thumb user__thumb--hasNew" onClick={() => {
                    console.log(`Clicou no Stories do Black Panther`);
                    toggleShowStory(true);
                    setStory(story);
                    setUser(getUser(story.userId));
                    }}>
                    <div className="user__thumb__wrapper">
                      {
                        (getUser(story.userId) !== undefined) ?
                          <img src={getUser(story.userId).avatar} alt={getUser(story.userId).name}></img>
                          :
                          ""
                      }
                    </div>
                  </button>
                );
              }
            )
          }
        </div>
      </section>

      {showStory && (
        <Story story={story} user={user}/>
        )}
    </React.Fragment>
  );
};

export default Stories;
