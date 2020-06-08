import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import Cards from "../Cards";

let handleInput = (event) => {
  console.log(`Usuario digitou = ${event.target.value}`);
}

function Search () {
  return (
    <div class="search">
      {/* <h1> SEARCH </h1> */}
      <input class="search__input" type="text" placeholder="O que você procura?"
             onInput={(event) => handleInput(event)}>

      </input>
      <Cards/>
    </div>
  );
}

export default Search;