import React, {Component} from 'react';
import Products from '../../Api/products.json';
import '../../sass/products/product.scss';
import Modal from '../modal/index.jsx';

class Data extends Component{
  constructor(props){
    super (props);
    this.state = {
      value: false,
      isLoaded: false,
      items: Products.products,
      show: false,
    } 
  }
  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  findObject(Products, element) {
    return Products.find((e) => {
     // return e.title === element;
      console.log('esxfdghbjnkmljhgvfcg', element);
    })
  }
  render () {
    const items = Products.products;
    return (
      <div className="wrapper-data">
        {items.map(item => (
          <div onClick={this.showModal} className="item-container" key={item.id}>
            <img src={item.imageUrl} alt="" className="img-product"/>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <button className="btn-buy"></button>

            {/** Modal */}
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <img className="img-product" src={this.findObject} alt=""/>
              <h3>{item.title}</h3>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
            </Modal>
          </div>
        )
        )}
        
      </div>
    );
  }
}

export default Data;