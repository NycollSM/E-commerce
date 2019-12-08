import React, {useState} from 'react';
import Products from '../../Api/products.json';
import '../../sass/products/product.scss';
import Modal from '../modal/index.jsx';
import '../Categories/index';


const Data = (props, productS) => {
  const [ items, setItems ] = useState(Products.products);
  const [ showModal, setShowModal ] = useState('-1');

  const [value, setValue] = React.useState(0);
  const onChange = (event) => {
    localStorage.setItem('myValueInLocalStorage', event.target);
    setValue(event.target);
    console.log('dfghjkl;', event.target);
  };


  return (
    <div className="wrapper-data">
      {items.map(item => (
        <div className="item-container" key={item.id} >
          <img src={item.imageUrl} alt="" className="img-product"/>
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <button className="btn-buy" value={value} onClick={onChange}></button>
          <button onClick={()=> setShowModal(item.id)} className="btn-modal-details">Details</button>
          { showModal === item.id && 
            <Modal
              show={showModal === item.id}
              hideModal={() => setShowModal('-1') }
              item={item}
            />
          }
        </div>
      ))}
    </div>
  );
};

export default Data;