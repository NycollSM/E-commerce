import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../sass/categories/categories.scss';
import Products from '../../Api/products.json';
import Data from '../Products/index';

const Buttons = (props) => {
  const productSelected = (props) => props.this.state.onChange + "1" ;
  const items = useState(Products.products);
  const filterOn = useState(false);
  
  return(
    <div> 
      <h3 className="title-categ">Categories</h3>
      <Link exact to="/showProducts"> 
        <button className="btn-cart">
          <span value= {productSelected.value} onChange={productSelected}>{productSelected}</span>
        </button>
      </Link>
      <ul className="list-category">
      <li className="list-c--item">
          <button className="btn-ui">All</button>
        </li>
        <li className="list-c--item">
          <button className="btn-ui" onClick={filtroCat(dos)}>Contemporary</button>
        </li>
        <li className="list-c--item">
          <button  className="btn-ui">Medieval</button>
        </li>
        <li className="list-c--item">
          <button  className="btn-ui">Sculptures</button>
        </li>
        <li className="list-c--item">
          <button  className="btn-ui">Paints</button>
        </li>
      </ul>
      <Data />
    </div>
  )
  function filtroCat (uno, dos, tres, cuatro) {
     uno = 1;
     dos =2;
     tres = 3; 
     cuatro = 4;
    items.map(item => (
      //console.log(uno)
      console.log(dos)
    ))

  }
}





export default Buttons;