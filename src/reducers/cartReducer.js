import { ADD_ITEM, REMOVE_ITEM } from '../actions/index';

const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const cartItems = state.slice();
      cartItems.total = 0;
      if (cartItems.filter(item => item.id === action.item.id).length === 0) {
        cartItems.push(action.item);
      }
      const result = cartItems.map(item => {
        if (item.id === action.item.id) {
          item.quantity = (item.quantity ? (item.quantity + 1) : (1));
        }
        cartItems.total += (cartItems.length !== 0 ? (item.quantity * item.amount) : (0));
        return item;
      });
      return result;
    }
    case REMOVE_ITEM: {
      const cartItems = state.slice();
      const newCartItems = cartItems.filter(item => item.id !== action.item.id)
      console.log('hola')
      return newCartItems
    }
    default:
      return state;
  }
};

export default cartItemsReducer;
