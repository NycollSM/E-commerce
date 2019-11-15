import React, {Component} from 'react';
import Products from '../../Api/products.json';

class Data extends Component{
  constructor(props){
    super (props);
    this.state = {
      value: false,
      isLoaded: false,
    }
  }
  componentDidMount(){
    fetch (Products)
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          id: result.id,
          items: result.products,
          name: result.products.title,
          details: result.cards.description
        })
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error
        });
      }
    )    
  }
  render () {
    const {error, isLoaded, items} = this.state;
    if (error){
      console.log(error)
      return <p>Error : {error.message}</p>
    } 
    else if (!isLoaded){
      return <p>Loading</p>
    } 
    else {
      return (
        <div>
          <h2>RENDERING DATA</h2> 
          {items.map(items.product, index => (
            <div>
              <h3 key={index.id}>{items.title}</h3>
              <p key={index.id}>{items.description}</p>
            </div>
          )
          )}
        </div>
      );
    }
  }
}

export default Data;