import React from 'react';
import '../../sass/header/header.scss';
import imageD from '../../img/origami-bird.png';


const Search = () => {
  return(
    <div className="header">
     
      <h3 className="title-header"> <img src={imageD} alt=""/>House Of Art</h3>
      <input className="search" type="search" name="Search" id="" placeholder="Search"/>
    </div>
  )
}

export default Search;