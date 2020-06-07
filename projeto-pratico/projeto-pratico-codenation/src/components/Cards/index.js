import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';

import Card from "../Card";

function Cards () {
  const [data, setData] = React.useState([]);
  let teste;

  React.useEffect(() => {
    console.log("componentDidMount");

    fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    .then(response => response.json()) /* Return a promise */
    .then(result => {
      setData(result);
    })
    .catch(err => {
      /* Treat if any promises fail */
      console.error("Failed retrieving information", err); 
    });
  }, []);

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