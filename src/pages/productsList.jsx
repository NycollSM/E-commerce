import React from 'react'
import Search from '../components/search';
import Manhattan from '../components/Manhattan';
import Categories from '../components/Categories'
import Products from '../components/Products';


const ProductsList = () => (
  <div>
    <Search />
    <Manhattan />
    <Categories />
    <Products />
  </div>
);

export default ProductsList;