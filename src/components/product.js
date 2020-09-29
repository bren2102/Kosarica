import React from 'react'

const Product = props => {
  const {name, image, amount, currency, measureUnit} = props;
  
  return( 
    <div className="product">
      <img src={image} />
      <h2>{name}</h2>
      <div id="price">
        <span>{amount}</span>
        <div>
          <span>{currency}</span>
          <span>{measureUnit}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Product