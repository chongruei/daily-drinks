import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
} from './actionTypes';

const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});

const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product,
});

const changeProductQuantity = (product, index, total) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: {
    index,
    product,
    total,
  },
});

export {addProduct, removeProduct, changeProductQuantity};
