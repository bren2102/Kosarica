import { combineReducers } from 'redux';
import cartItemsReducer from './cartReducer';

const rootReducer = combineReducers({
  cartItems: cartItemsReducer,
});

export default rootReducer;
