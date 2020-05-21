import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article data-testid="post" className="post">
      <header className="post__header">
        <div className="user">
          <a href="/" className="user__thumb">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="T'Challa"></img>
          </a>
          <a href="/" className="user__name">T'Challa</a>
        </div>
        <div className="post__context">
          <button className="follow-btn">Seguir</button>
        </div>
      </header>
      <figure className="post__figure">
        <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg" alt="T'Challa and Sister"></img>
      </figure>
      <div class="post__controls">
        <div class="post__control">
          <i class="fas fa-heart" aria-hidden="true"></i>
        </div>
        <div className="post__status">
          <div className="user">
            <span>curtido por
              <a href="/"> Santino Rowe </a>
              e outras
              <a href="/"> X pessoas</a>
            </span>
          </div>
        </div>
      </div>
      <header className="post__header">
        <div className="user">
          <a href="/" className="user__thumb">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="T'Challa"></img>
          </a>
          <a href="/" className="user__name">T'Challa</a>
        </div>
        <div className="post__context">
          <button className="follow-btn">Seguir</button>
        </div>
      </header>
      <figure className="post__figure">
        <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-2.jpg" alt="T'Challa and Sister"></img>
      </figure>
      <div class="post__controls">
        <div class="post__control">
          <i class="fas fa-heart" aria-hidden="true"></i>
        </div>
        <div className="post__status">
          <div className="user">
            <span>curtido por
              <a href="/"> Santino Rowe </a>
              e outras
              <a href="/"> X pessoas</a>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
