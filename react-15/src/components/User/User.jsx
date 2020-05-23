import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = "";//infoUser;

  return (
    // Nao precia desta classe users-list quando for preencher os posts
    // porque tudo ficará dentro de um loop
    // E este Return já está dentro de uma classe users-list, no aquivo
    // UsersList.jsx
    <div data-testid="user" class="users-list">
    <article className="post">
      <header className="post__header">
        <a href="/" class="user">
          <div href="/" class="user__thumb">
            {/* Avatar instead of img src */}
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="User Avatar"></img>
          </div>
          <div href="/" class="user__name">T'Challa</div>
        </a>
      </header>
    </article>
    <article className="post">
    <header className="post__header">
      <a href="/" class="user">
        <div href="/" class="user__thumb">
          {/* Avatar instead of img src */}
          <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="User Avatar"></img>
        </div>
        <div href="/" class="user__name">T'Challa</div>
      </a>
    </header>
  </article>
  <article className="post">
    <header className="post__header">
      <a href="/" class="user">
        <div href="/" class="user__thumb">
          {/* Avatar instead of img src */}
          <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="User Avatar"></img>
        </div>
        <div href="/" class="user__name">T'Challa</div>
      </a>
    </header>
  </article>
  <article className="post">
    <header className="post__header">
      <a href="/" class="user">
        <div href="/" class="user__thumb">
          {/* Avatar instead of img src */}
          <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="User Avatar"></img>
        </div>
        <div href="/" class="user__name">T'Challa</div>
      </a>
    </header>
  </article>
  </div>
  )
};

export default User;
