import React from 'react';
import '../../sass/Manhattan/manhattan.scss';
import image1 from '../../img/pavel-nekorane.jpg';

const Manhattan = () => {
  return (
    <div className="wrapper-Manhattan">
      <h1>House of Art</h1>
      <div className="wrapper-img">
        <img src={image1} alt=""/>
      </div>
    </div>
  );
}

export default Manhattan;