import React, { useState } from "react";

import Story from '../../components/Story';

import { Link } from 'react-router-dom';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">
          <button className="user__thumb user__thumb--hasNew">
            <div className="user__thumb__wrapper">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="T'Challa"></img>
            </div>
          </button>
          <Link to="/" className="user__thumb">
            <div className="user__thumb__wrapper">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg" alt="Bruce Wayne"></img>
            </div>
          </Link>
          <Link to="/" className="user__thumb">
            <div className="user__thumb__wrapper">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/gamora/gamora-profile.jpg" alt="Gamora"></img>
            </div>
          </Link>
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
