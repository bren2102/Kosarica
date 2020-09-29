import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../actions/index';

class Product extends React.Component {
  handleAddToCart = () => {
    const { id, name, amount } = this.props;
    const item = {
      id,
      name,
      amount,
    };
    const { addItem } = this.props;
    addItem(item);
  }

  render() {
    const {
      name, image, amount, currency, measureUnit,
    } = this.props;

    return (
      <div className="product">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <div id="price">
          <span>{amount}</span>
          <div>
            <span>{currency}</span>
            <span>{measureUnit}</span>
          </div>
        </div>
        <button onClick={() => this.handleAddToCart()} type="button">ADD</button>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  measureUnit: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
