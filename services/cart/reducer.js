import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
} from './actionTypes';

const initialState = {
  total: 0,
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        total: state.total + action.payload.price,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        total: state.total - action.payload.totalPrice,
        products: state.products.filter(product => product !== action.payload),
      };
    case CHANGE_PRODUCT_QUANTITY:
      const newProducts = [...state.products];
      newProducts.splice(action.payload.index, 1, action.payload.product);

      return {
        ...state,
        total: action.payload.total,
        products: newProducts,
      };

    default:
      return state;
  }
};

export {cartReducer};
