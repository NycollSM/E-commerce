import React, {Component} from 'react';
import Products from '../../Api/products.json';
import '../../sass/products/product.scss';
import Modal from '../modal/index.jsx';

class Data extends Component{
  constructor(props){
    super (props);
    this.state = {
      value: null,
      isLoaded: false,
      items: Products.products,
      show: false,
      showModal: 0,
    } 
  }

  getModal (value) {
    console.log(value);
    this.setState({ showModal: value })
  }

  hideModal () {
    //console.log('kfkf')
   this.setState({ show: 0});
  };

  
  render () {
    const { items } = this.state;
    
    return (
      <div className="wrapper-data">
        {items.map(item => (
          <div onClick={()=>this.getModal(item.id)} className="item-container"  key={item.id}>
            <img src={item.imageUrl} alt="" className="img-product"/>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <button className="btn-buy"></button>

            {/** Modal */}
            <Modal
              show={this.state.showModal === item.id}
              hideModal={() => this.hideModal()}
              item={item}
            />
          </div>
        )
        )}
        
      </div>
    );
  }
}

export default Data;