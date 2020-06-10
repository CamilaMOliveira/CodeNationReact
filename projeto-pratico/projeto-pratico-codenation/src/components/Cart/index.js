import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Cart () {
  const { cartTotalItems, cart } = useSelector(state => state);
  return (
    <section className="">
      <h1> CART TOTAL ITEMS = {cartTotalItems}</h1>
      {
        cart.map(product => {
          console.log(`PRODUCT = ${product.item.name}`);
          console.log(`PRODUCT AMOUNT = ${product.count_item}`);
          return(
            <section>
              <h2> PRODUCT = {product.item.name}</h2>
              <h2> PRODUCT AMOUNT = {product.count_item}</h2>
            </section>
          );
        })
      }
    </section>
  );
  // return (
  //   <h1> CART TOTAL ITEMS = {cartTotalItems}</h1>
  //   <section>
  //     {
  //       cart.map(product => {
  //         return(
  //           <div item={item}/>
  //         );
  //       })
  //     }
  //   </section>
  // );
}

export default Cart;