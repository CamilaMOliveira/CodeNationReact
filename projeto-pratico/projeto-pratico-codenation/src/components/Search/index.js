import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchCards from "../SearchCards";

import { useDispatch } from "react-redux";

import {
  setSearch
} from "../../action";

let searchResult = [];

function Search () {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="O que você procura?"
             onInput={(event) => dispatch(setSearch(event.target.value))}>
      </input>
      <SearchCards result={searchResult}/>
    </div>
  );
}

export default Search;