import { combineReducers } from 'redux';
import cart from './ducks/CartDucks';
import products from './ducks/ProductDucks';

export default combineReducers({
  cart,
  products
});

