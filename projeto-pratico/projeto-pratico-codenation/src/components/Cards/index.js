import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';

import Card from "../Card";

import { useSelector, useDispatch } from "react-redux";

import {
  getData,
  setData,
  setItem
} from "../../action";

let global = 0;

function Cards () {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state);

  React.useEffect(() => {
    console.log("componentDidMount");

    fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    .then(response => response.json()) /* Return a promise */
    .then(result => {
      dispatch(setData(result));
    })
    .catch(err => {
      /* Treat if any promises fail */
      console.error("Failed retrieving information", err); 
    });
  }, [dispatch]);

  return (
    <section className="cards">
    {
      data.map(item => {
        return(
          <Card item={item}/>
        );
      })
    }
  </section>
  );
}

export default Cards;