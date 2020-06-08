import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';

import Card from "../Card";

import { useSelector, useDispatch } from "react-redux";

import {
  getData,
  setData
} from "../../action";

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

  console.log("Data = ");
  console.log(data);

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