import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

/* BEM CSS => block__element--modifier 
  * Block: The outermost parent element of the component is defined as the block.
  * Element: Inside of the component may be one or more children called elements.
  * Modifier: Either a block or element may have a variation signified by a modifier
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <a className="App-nav__title" href="/">Fashionista</a>
          <div className="App-nav__icons">
            <button class="App-nav__icons--search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <button class="App-nav__icons--cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>
        </nav>
        {/* <div class="App-header__title">Fashionista</div>
        <div class="App-header__icons">Search Carrinho</div> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
    </div>
  );
}

export default App;
