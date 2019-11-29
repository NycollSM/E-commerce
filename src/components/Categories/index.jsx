import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/categories/categories.scss';
import Data from '../Products/index';

const Buttons = () => {
  const productSelected = (props) => props.this.state.onChange + "1" ;
  
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
          <button className="btn-ui">Contemporary</button>
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
}

export default Buttons;