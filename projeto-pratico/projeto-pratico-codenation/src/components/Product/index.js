import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { useParams } from "react-router";

function Product () {
  let discount = 1;
  const { name } = useParams();
  console.log(`Name = ${name}`);
  return (
    <div class="product">
      <img class="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" alt="calca"></img>
      {/* <div className="product__discount">15% OFF </div> */}
      <div class="product__info">
        <div class="product__info__name">CALÇA COMFORT TASSEL</div>
        <div class="product__price">
          {
            (discount === 1) ?
              <p class="product__price product__price--regular">R$ 139,90</p>
              :
              ""
          }
          <p class="product__price product__price--actual">R$ 84,90</p>
          <p class="product__installment">em até 2x R$ 42,45</p>
          {
            (discount === 1) ?
            <p class="product__discount">(15% OFF)</p>
              :
              ""
          }
        </div>
        <div class="product__size">
          Escolha o tamanho
          <div class="product__buttons">
            <button class="product__buttons__btn">36</button>
            <button class="product__buttons__btn">38</button>
            <button class="product__buttons__btn">40</button>
            <button class="product__buttons__btn">42</button>
          </div>
          <button class="product__add">Adicionar à sacola</button>
        </div>
      </div>
    </div>
  );
}

export default Product;