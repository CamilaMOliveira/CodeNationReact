import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';
import UserProfile from '../../containers/UserProfile';

import './UserForm.scss';

const UserForm = () => {
  return (
    <React.Fragment>
      <UserProfile
        avatar="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
        name="John Doe"
        username="@johndoe"
      />
      <div data-testid="user-form" className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label htmlFor="fname">Nome</label>
            <input type="text" id="fname" name="fname" placeholder="Digite seu nome"></input>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" placeholder="Digite seu usuário"></input>
            <label>E-mail</label>
            <input type="text" id="email" name="email" placeholder="Digite seu e-mail"></input>
            <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input type="text" id="url" name="url" placeholder="http://..."></input>
            <button onClick={console.log(`Button clicked`)}>Cadastrar</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserForm;
