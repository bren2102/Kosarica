import React from 'react';

const Product = props => {
  const {name, image, amount, currency, measureUnit} = props;
  
  return( 
    <div className="product">
      <img src={image} alt='' />
      <h3>{name}</h3>
      <div id="price">
        <span>{amount}</span>
        <div>
          <span>{currency}</span>
          <span>{measureUnit}</span>
        </div>
      </div>
      <button>ADD</button>
    </div>
  )
}

export default Product