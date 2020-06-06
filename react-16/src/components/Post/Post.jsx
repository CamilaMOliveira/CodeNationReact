import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  let i=0;
  // console.log(`Post Info = ${JSON.stringify(postInfo.comments.name)}`);

  let {comments} = postInfo;

  // console.log(`Post Info = ${comments[0].name}`);

  if(postInfo === "userposts") {
    console.log("Entrou no if");
    return (
        <article data-testid="post" className="post">
          <figure className="post__figure">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg" alt="T'Challa and Sister"></img>
          </figure>
        </article>
    );
  }

  //  if (userInfo) {
  //   return(
  //     <article data-testid="post" className="post"></article>
  //   )
  // }

  if (userInfo) {
  return (
    <article data-testid="post" className="post">
      <header className="post__header">
        <div className="user">
          <a href="/users/blackpanther" className="user__thumb">
            {/* <img src={"https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"} alt="T'Challa"></img> */}
            <img src={userInfo.avatar} alt={userInfo.name}></img>
          </a>
          <a href="/users/blackpanther" className="user__name">{userInfo.name}</a>
        </div>
        <div className="post__context">
          <button className="follow-btn">Seguir</button>
        </div>
      </header>
      <figure className="post__figure">
        {/* <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg" alt="T'Challa and Sister"></img> */}
        <img src={postInfo.imageUrl} alt="T'Challa and Sister"></img>
      </figure>
      <div className="post__controls">
        <div className="post__control">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </div>
        <div className="post__status">
          <div className="user">
            <span>curtido por
              <a href="/"> {postInfo.comments[0].name} </a>
              e outras
              <a href="/"> {comments.length-1} pessoas</a>
            </span>
          </div>
        </div>
      </div>

      {/* <header className="post__header">
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
      <div className="post__controls">
        <div className="post__control">
          <i className="fas fa-heart" aria-hidden="true"></i>
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
      </div> */}
    </article>
  );
    }
    return null;
};

export default Post;
