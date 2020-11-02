import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../actions/index';

class Cart extends React.Component {
  hanldeDeleteFromCart(item) {
    const { removeItem } = this.props;
    removeItem(item);
  }

  render() {
    const { cartItems } = this.props;
    const total = cartItems
      .reduce((acc, nextItem) => acc + (nextItem.quantity * nextItem.amount), 0);
    return (
      <div className="cart">
        <h2>My Cart</h2>
        <div className="productsAdded">
          { cartItems.map(
            item => (
              <div id="item" key={item.id}>
                <div>
                  <div id="topText">
                    <img src={item.image} alt="" />
                    <span>
                      {' '}
                      {item.quantity}
                      {' '}
                      x
                      {' '}
                      {item.name}
                    </span>
                  </div>
                  <span>
                    U.P: $
                    {item.amount}
                  </span>
                </div>
                <button type="button" onClick={() => this.hanldeDeleteFromCart(item)}>X</button>
              </div>
            ),
          )}
        </div>
        {(total !== 0)
          ? (
            <div>
              <h3>TOTAL</h3>
              <span>
                $
                {total.toFixed(2)}
              </span>
            </div>
          )
          : (<span>No items added</span>)}

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
