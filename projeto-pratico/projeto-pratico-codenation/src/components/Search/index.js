import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import Cards from "../Cards";
import SearchCards from "../SearchCards";

import { useSelector, useDispatch } from "react-redux";

import {
  setSearch
} from "../../action";

let searchResult = [];

let handleInput = (event, data) => {
  console.log(`Usuario digitou = ${event.target.value}`);

  // let searchResult = [];

  /* Let's loop through the original array, so that "contacts" can be updated correctly */
  data.map(product => {
    // console.log(`Search Product name = ${product.name}`);
    /* If what the user searched, exists in any contact */
    if(product.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1){
      /* Let's update the list of searched contacts */
      // newContacts.push(contact);
      console.log(`Resultado da busca = ${JSON.stringify(product.name)}`);
      searchResult.push(product);
    }
  });

  // searchResult.map(result => {
  //   console.log(`SEARCH RESULT = ${result.name}`);
  // })
}

function Search () {
  // const dispatch = useDispatch();
  const { data } = useSelector(state => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("Product componentDidMount");
    // dispatch(setSearch(searchResult));
  }, [dispatch]);

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