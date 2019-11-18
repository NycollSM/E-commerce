import React, {Component} from 'react';
import Products from '../../Api/products.json';
import '../../sass/products/product.scss';

class Data extends Component{
  constructor(props){
    super (props);
    this.state = {
      value: false,
      isLoaded: false,
      items: Products.products,
    }
  }

  render () {
    const items = Products.products;
    return (
      <div>
        {items.map(item => (
          <div className="item-container" key={item.id}>
            <img src={item.imageUrl} alt="" className="img-product"/>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        )
        )}
      </div>
    );
  }
}

export default Data;