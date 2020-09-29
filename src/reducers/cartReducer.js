/* eslint-disable */
import { ADD_ITEM, REMOVE_ITEM } from '../actions/index';

const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const cartItems = state.slice();
      if (cartItems.filter(item => item.id === action.item.id).length === 0) {
        cartItems.push(action.item);
      }
      const result = cartItems.map(item => {
        if (item.id === action.item.id) {
          item.quantity = (item.quantity ? (item.quantity + 1) : (1));
        }
        return item;
      });
      return result;
    }
    case REMOVE_ITEM: {
      const cartItems = state.slice();
      const newCartItems = cartItems.map(item => {
        if (item.id === action.item.id) {
          item.quantity -= 1;
        }
        return item;
      });
      const finalResult = newCartItems.filter(item => item.quantity > 0);
      return finalResult;
    }
    default:
      return state;
  }
};

export default cartItemsReducer;
