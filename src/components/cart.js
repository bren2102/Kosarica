import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component {
  render(){
    const {cartItems} = this.props;
    console.log(cartItems)
    return(
      <div className="cart">
        <h2>Kosarica</h2>
        <div className="productsAdded">
          { cartItems.map(
              item => (
                <h3>{item.name}</h3>
              )
          )}
        </div>
        <h3>Total</h3>
        <h3>500</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
})

export default connect(mapStateToProps, null)(Cart);