import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

function Header () {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <Link to="/" className="App-nav__title">Fashionista</Link>
        <div className="App-nav__icons">
          <Link to="/search">
            <button className="App-nav__icons--search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </Link>
          <Link to="/cart">
            <button className="App-nav__icons--cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;