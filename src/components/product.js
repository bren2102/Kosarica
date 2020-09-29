import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../actions/index';

class Product extends React.Component {
  handleAddToCart = () => {
    const {
      id, name, amount, image,
    } = this.props;
    const item = {
      id,
      name,
      amount,
      image,
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
        {(image)
          ? (<img src={image} alt="" />)
          : (<img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png" alt="" />
          )}
        <h3>{name}</h3>
        <div id="price">
          <span>
            $
            {amount}
          </span>
          <span>
            {currency}
            /
            {measureUnit}
          </span>
          <button onClick={() => this.handleAddToCart()} type="button">+</button>
        </div>
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
  addItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
