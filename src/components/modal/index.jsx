import React from 'react';
import '../../sass/products/product.scss';
 
const Modal = ({ hideModal, show, item }) => {
  return (
    <>
      {show &&
        <div className="modal">
          <section className="modal-main">
            <img src={item.imageUrl} className="img-modal"alt=""/>
            <div className="info-modal">
              <h3>{item.title}</h3>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
              <button className="btn-cart-modal">Add to cart</button>
            </div>
          </section>
          <button className="btn-close-modal" onClick={hideModal}>close</button>
        </div>
      }
    </>
  )
} 
export default Modal;