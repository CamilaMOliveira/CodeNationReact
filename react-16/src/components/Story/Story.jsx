import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section data-testid="story" className="story">
      <div className="container">
        <div className="story__header">
          <div className="user">
            <div className="user__thumb">
              <img src={user.avatar} alt={user.name}></img>
            </div>
            <div className="user__name">
              {user.name}
            </div>
          </div>
          {/* <Link to="/"> */}
            <button className="story__close">x</button>
          {/* </Link> */}
        </div>
        <div className="story__progress">
          <div class="story__progress__elapsed"></div>
        </div>
        <div className="container">
          <div className="story__video__wrapper">
            <div className="video-player">
              <video autoplay="" class="video-player" loop="" playsinline="" src={story.videoUrl}></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
