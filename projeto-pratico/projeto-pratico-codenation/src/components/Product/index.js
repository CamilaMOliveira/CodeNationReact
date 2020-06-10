import React from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import {
  getData,
  setData,
  setItem,
  updateCart
} from "../../action";

function Product () {
  let discount = 0;
  let chosenSize = -1;
  let chooseSize = 0;
  const { name } = useParams();
  const dispatch = useDispatch();
  const { data, item } = useSelector(state => state);

  // let nameSpace = name.replace(/-/g, " ");

  console.log(`Name = ${name}`);

  React.useEffect(() => {
    console.log("Product componentDidMount");
    dispatch(setItem(name));
  }, [dispatch, name]);


  // console.log(`Product data = ${JSON.stringify(data)}`);
  if(item !== undefined)
    console.log(`Product Item = ${item.name}`);

  if(item !== undefined) {

    if(item.discount_percentage !== "") {
      discount = 1;
    }

    let strsize = JSON.stringify(item.sizes);
    console.log(`Sizes = ${strsize}`);

    return (
      <div className="product">
        {
          (item.image !== "") ?
            <img className="product__image" src={item.image} alt={item.name}></img>
            :
            <img className="product__image" src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel" alt={item.name}/>
        }
        <div className="product__info">
          <div className="product__info__name">{item.name}</div>
          <div className="product__price">
            {
              (discount === 1) ?
                <p className="product__price product__price--regular">{item.regular_price}</p>
                :
                ""
            }
            <p className="product__price product__price--actual">{item.actual_price}</p>
            <p className="product__installment">em até {item.installments}</p>
            {
              (discount === 1) ?
              <p className="product__discount">({item.discount_percentage} OFF)</p>
                :
                ""
            }
          </div>
          <div className="product__size">
            Escolha o tamanho
            <div className="product__buttons">
              {
                (item.sizes !== undefined) ?
                  item.sizes.map(size => {
                    if(size.available) {
                      console.log(`Size = available`);
                      return (
                        <button className="product__buttons__btn" onClick={() => {
                          chosenSize = size.size;
                        }
                        }>
                          {size.size}
                        </button>
                      );
                    }
                  })
                  :
                  null
              }
            </div>
            <button className="product__add" onClick={() => {
              if(chosenSize === -1) {
                chooseSize = 1;
                console.log(`Usuario nao escolheu um tamanho`);
                alert("Você precisa escolher um tamanho.");
              } else {
                console.log(`Usuario clicou em = ${chosenSize}`);
                dispatch(updateCart(item, chosenSize));
              }
            }
            }>
              Adicionar à sacola
            </button>
            {/* {
              (chooseSize === 1) ?
                <div>Voce precisa escolher um tamanho.</div>
                :
                ""
            } */}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Product;