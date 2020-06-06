import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from "./components/Header";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

/* BEM CSS => block__element--modifier 
  * Block: The outermost parent element of the component is defined as the block.
  * Element: Inside of the component may be one or more children called elements.
  * Modifier: Either a block or element may have a variation signified by a modifier
*/

export default function App () {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Cards} />
            <Route path="/search" component={Search} />
            <Route path="/cart" component={Cart} />
        </Switch>
        </Router>
      </div>
  );
}
