import {ADD_ITEM, REMOVE_ITEM} from '../actions/index';

const cartItemsReducer = (state=[], action) => {
  switch(action.type) {
    case ADD_ITEM: {
      const cartItems = state.slice();
      const filtered = cartItems.filter(item=> item.id)
      console.log(filtered)
      cartItems.push(action.item)
      return cartItems;
    }
    case REMOVE_ITEM: {
      return action.removeItem;
    }
    default:
      return state;
  }
};

export default cartItemsReducer;