import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchCard from "../SearchCard";
import { useSelector, useDispatch } from "react-redux";

function SearchCards ({result}) {
  const { search } = useSelector(state => state);

  console.log(`SearchCards = ${result}`);

  return (
    <section className="cards">
    {
      search.map(item => {
        return(
          <SearchCard item={item}/>
        );
      })
    }
  </section>
  );
}

export default SearchCards;