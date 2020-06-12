import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo, isProfile }) => {
  let i=0;
  // console.log(`Post Info = ${JSON.stringify(postInfo.comments.name)}`);

  let {comments} = postInfo;

  // console.log(`Post Info = ${comments[0].name}`);

  if(isProfile === "userposts") {
    console.log("Entrou no if");
    return (
        <article data-testid="post" className="post">
          <figure className="post__figure">
            <img src={postInfo.imageUrl} alt="T'Challa and Sister"></img>
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
          <Link to={`/users/${userInfo.username}`} className="user__thumb">
            <img src={userInfo.avatar} alt={userInfo.name}></img>
          </Link>
          <Link to={`/users/${userInfo.username}`} className="user__name">{userInfo.name}</Link>
        </div>
        <div className="post__context">
          <button className="follow-btn">Seguir</button>
        </div>
      </header>
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="T'Challa and Sister"></img>
      </figure>
      <div className="post__controls">
        <div className="post__control">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </div>
        <div className="post__status">
          <div className="user">
            <span>curtido por
              <Link to="/"> {postInfo.comments[0].name} </Link>
              e outras
              <Link to href="/"> {comments.length-1} pessoas</Link>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
    }
    return null;
};

export default Post;
