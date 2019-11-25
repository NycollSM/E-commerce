import React from 'react';
import '../../sass/products/product.scss';
 
const Modal = ({ hideModal, show, item }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none important";
  return (
    <>
      {show &&
        <div>
          <section className="modal-main">
            <h3>{item.title}</h3>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <button className="btn-close-modal" onClick={hideModal}>close</button>
          </section>
        </div>
      }
    </>
  )
} 
export default Modal;