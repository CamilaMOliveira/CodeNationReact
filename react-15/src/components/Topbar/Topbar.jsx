import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import 'font-awesome/css/font-awesome.min.css';

import './Topbar.scss';

const Topbar = () => (
  <header data-testid="topbar" className="topbar">
    <div className="container">
      <a href="/" className="topbar__logo">
        <LogoSvg/>
      </a>
      <div className="topbar__group">
        <div className="topbar__icon">
          <a href="/users">
            <i className="fas fa-users" aria-hidden="true"></i>
            <span>Usuários</span>
          </a>
        </div>
        <div className="topbar__icon">
          <a href="/newuser">
            <i className="fas fa-user-plus" aria-hidden="true"></i>
            <span>Nova Conta</span>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
