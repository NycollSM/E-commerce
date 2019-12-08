import React from 'react';
import '../../sass/products/product.scss';
 
 const Modal = ({ hideModal,item }) => (
  <div className="modal">
    <section className="modal-main">
    <img src={item.imageUrl} className="img-modal"alt=""/>
      <div className="info-modal">
        <h3>{item.title}</h3>
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
        <button className="btn-buy"></button>
      </div>
    </section>
     <button className="btn-close-modal" onClick={hideModal}>close</button>
  </div>
);

export default Modal;