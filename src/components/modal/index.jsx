import React from 'react';

const Modal = ({hideModal, show, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="btn-close-modal" onClick={hideModal}>close</button>
      </section>
    </div>
  )
}

export default Modal;