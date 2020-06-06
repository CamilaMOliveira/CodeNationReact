import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

/* BEM CSS => block__element--modifier 
  * Block: The outermost parent element of the component is defined as the block.
  * Element: Inside of the component may be one or more children called elements.
  * Modifier: Either a block or element may have a variation signified by a modifier
*/

export default function App () {
  const [data, setData] = React.useState([]);

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
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <a className="App-nav__title" href="/">Fashionista</a>
            <div className="App-nav__icons">
              <button className="App-nav__icons--search">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              <button className="App-nav__icons--cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </button>
            </div>
          </nav>
        </header>
        <section className="cards">
          {
            data.map(item => {
              return(
                <div className="card">
                  <a className="card__link" href="/produto/vestido">
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
                        (item.discount_percentage !== "") ?
                          /* If the outfit has a discount to be applied, display it */
                          <div className="card__discount">{item.discount_percentage} OFF </div>
                          :
                          /* Else, don't display any discount price */
                          ""
                      )
                    }
                    <div className="card__title">{item.name}</div>
                    <div className="card__price">{item.regular_price}</div>
                  </a>
                </div>
              )
            })
          }
        </section>
      </div>
    </React.Fragment>
  );
}
