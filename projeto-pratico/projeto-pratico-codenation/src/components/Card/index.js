import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getData,
  setData,
  setItem
} from "../../action";

function Card ({item}) {
  let discount = 0;
  let nameDashed = item.name.replace(/ /g, "-");
  const dispatch = useDispatch();
  const { data } = useSelector(state => state);

  // React.useEffect(() => {
  //   console.log("Card componentDidMount");
  //   dispatch(setItem(item.name));
  //   // dispatch(getData());
  // }, [dispatch, item.name]);

  console.log(`Str replaced with dashes = ${nameDashed}`);

  if(item.discount_percentage !== "") {
    discount = 1;
  }
  return (
    <div className="card">

    <Link to={`/product/${item.name}`} className="card__link">
      {
        (
          (item.image !== "") ?
            <img className="card__image" src={item.image} alt={item.name}/>
            :
            <img className="card__image" src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel" alt={item.name}/>
        )
      }

      {
        (
          (discount === 1) ?
            /* If the outfit has a discount to be applied, display it */
            <div className="card__discount">{item.discount_percentage} OFF </div>
            :
            /* Else, don't display any discount price */
            ""
        )
      }
      <div className="card__title">{item.name}</div>
      {
        (discount === 1) ?
        /* If the outfit has a discount, display the original price */
          <div className="card__price card__price--regular">{item.regular_price}</div>
        :
        /* Else, don't display anything */
        ""
      }
      <div className="card__price card__price--actual">{item.actual_price}</div>
    </Link>
  </div>
  );
}

export default Card;