import React, {Component} from 'react';
import '../../sass/header/header.scss';
import imageD from '../../img/origami-bird.png';
import Products from '../../Api/products.json';
import Data from '../Products/index'


class Search extends Component {
  constructor (){
    super();
    this.setState = {
      search: 'Searching',
      infoElements: Products.products
    }
  }
  filterList = (event) => {
    let items = this.state.initialItems;
    items = items.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: items});
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)});
  }
  render(){
    return(
      <div className="header">
        <h3 className="title-header"> <img src={imageD} alt=""/>House Of Art</h3>
        <input className="search" type="search"
          name="Search" id="" placeholder="Search"
        />
      </div>
    )
  }
}

export default Search;