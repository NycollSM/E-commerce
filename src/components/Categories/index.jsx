import React from 'react';
import '../../sass/categories/categories.scss';
import Data from '../Products/index';

const Buttons = () => {
  return(
    <div> 
      <h3 className="title-categ">Categories</h3>
      <ul className="list-category">
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
      <div className="Wrapper-data">
      <Data />
      </div>
    </div>
     
    
  )
  
}

export default Buttons;