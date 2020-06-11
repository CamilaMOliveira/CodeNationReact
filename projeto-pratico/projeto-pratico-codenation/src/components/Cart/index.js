import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from "react-redux";

import CartProduct from "../CartProduct";

function Cart () {
  const { cartTotalItems, cartTotalPrice, cart } = useSelector(state => state);
  return (
    <div className="cart">
      <div className="cart__info">
        <div className="cart__total">Sacola de Compras ({cartTotalItems})</div>
        {
          (cartTotalItems === 0) ?
            <div className="cart__total">Total: R$ 0.00</div>
            :
            <div className="cart__total">Total: R$ {cartTotalPrice.toFixed(2)}</div>
        }
      </div>
      {
        (cartTotalItems === 0) ?
        <div className="cart__empty"> Sua sacola está vazia :( </div>
        :
        ""
      }
      <div className="cards">
        {
          cart.map(product => {
            return (
              <CartProduct product={product}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default Cart;