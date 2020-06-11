import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getData,
  setData,
  setItem,
  addProduct,
  decrementProduct,
  removeProduct
} from "../../action";

function CartProduct ({product}) {
  let discount = 0;
  const dispatch = useDispatch();

  if(product.item.discount_percentage !== "") {
    discount = 1;
  }
  return (
      <div className="cart__card">
          {
            (
              (product.item.image !== "") ?
                <img className="cart__card__image" src={product.item.image} alt={product.item.name}/>
                :
                <img className="cart__card__image" src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel" alt={product.item.name}/>
            )
          }

          <div className="card__title">{product.item.name}</div>
          <div className="cart__price">
            <div className="cart__price__actual">{product.item.actual_price}</div>
            <div className="product__installment">em até {product.item.installments}</div>
          </div>
          <div className="cart__installment">Tamanho: {product.size}</div>
          <div className="cart__quantity">
            <button className="cart__button" onClick={() => {
              dispatch(decrementProduct(product.item, product.size));
              }}>
                -
            </button>
            <div className="cart__product__quantity">{product.count_item}</div>
            <button className="cart__button" onClick={() => {
              console.log(`CLIQUE NO MAIS (NAME) => ${product.item.name}`);
              console.log(`CLIQUE NO MAIS (SIZE) => ${product.size}`);
              dispatch(addProduct(product.item, product.size));
              }}>
                +
            </button>
          </div>
          <button className="cart__remove" onClick={() => {
            dispatch(removeProduct(product.item, product.size));
            }}>
            Remover item
          </button>
      </div>
  );
}

export default CartProduct;