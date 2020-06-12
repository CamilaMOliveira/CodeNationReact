import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import 'font-awesome/css/font-awesome.min.css';

import './Topbar.scss';

const Topbar = () => (
  <header data-testid="topbar" className="topbar">
    <div className="container">
      <Link to="/" className="topbar__logo">
        <LogoSvg/>
      </Link>
      <div className="topbar__group">
        <div className="topbar__icon">
          <Link to="/users">
            <i className="fas fa-users" aria-hidden="true"></i>
            <span>Usuários</span>
          </Link>
        </div>
        <div className="topbar__icon">
          <Link to="/newuser">
            <i className="fas fa-user-plus" aria-hidden="true"></i>
            <span>Nova Conta</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
