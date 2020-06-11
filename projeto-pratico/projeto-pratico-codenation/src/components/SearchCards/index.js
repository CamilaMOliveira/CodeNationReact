import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';

import Card from "../Card";

import { useSelector, useDispatch } from "react-redux";

import {
  getData,
  setData,
  setSearch
} from "../../action";

function SearchCards ({result}) {
  const dispatch = useDispatch();
  const { data, item, search } = useSelector(state => state);

  React.useEffect(() => {
    console.log("componentDidMount");

    dispatch(getData());
  }, [dispatch]);

  console.log(`SearchCards = ${result}`);

  return (
    <section className="cards">
    {
      search.map(item => {
        return(
          <Card item={item}/>
        );
      })
    }
  </section>
  );
}

export default SearchCards;