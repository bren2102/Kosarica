import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../actions/index';

class Cart extends React.Component {
  hanldeDeleteFromCart(id) {
    removeItem(id);
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div className="cart">
        <h2>CART</h2>
        <div className="productsAdded">
          { cartItems.map(
            item => (
              <div id="item" key={item.id}>
                <div>
                  <div>
                    <span>
                      {item.quantity}
                      {' '}
                      x &nbsp;
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <span>{item.amount}</span>
                </div>
                <button onClick={() => this.hanldeDeleteFromCart(item.id) }>X</button>
              </div>
            ),
          )}
        </div>
        <h3>TOTAL</h3>
        <span>{cartItems.total}</span>
      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
