import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Container, Cart, PurchaseContainer, Checkout, Item} from './styles';
import {
  removeProduct,
  changeProductQuantity,
} from '../../services/cart/actions';

const findProductIndex = (products, product) =>
  products.findIndex(p => p.id === product.id);

const ShoppingCart = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const total = useSelector(state => state.cart.total);

  const handleRemoveProduct = product => () => {
    dispatch(removeProduct(product));
  };

  const handleProductQuantity = (product, quantity) => {
    const newProduct = {...product};
    const productIndex = findProductIndex(products, newProduct);
    const newTotal = total + newProduct.price * quantity;

    newProduct.quantity = newProduct.quantity + quantity;

    if (newProduct.quantity < 1) {
      alert('數量不得小於1');
      return;
    }

    newProduct.totalPrice = newProduct.price * newProduct.quantity;
    dispatch(changeProductQuantity(newProduct, productIndex, newTotal));
  };

  const handleIncreaseProductQuantity = product => () =>
    handleProductQuantity(product, 1);

  const handleDecreaseProductQuantity = product => () =>
    handleProductQuantity(product, -1);

  return (
    <Container toggle={toggle}>
      <Cart
        toggle={toggle}
        onClick={() => setToggle(currToggle => !currToggle)}
      />

      {toggle && (
        <React.Fragment>
          <PurchaseContainer>
            {products &&
              products.map(product => {
                const {id, imgUrl, name, quantity, totalPrice} = product;

                return (
                  <Item
                    key={id}
                    imgUrl={imgUrl}
                    prodName={name}
                    quantity={quantity}
                    totalPrice={totalPrice}
                    removeProduct={handleRemoveProduct(product)}
                    increaseProductQuantity={handleIncreaseProductQuantity(
                      product,
                    )}
                    decreaseProductQuantity={handleDecreaseProductQuantity(
                      product,
                    )}
                  />
                );
              })}
          </PurchaseContainer>
          <Checkout totalPrice={total} />
        </React.Fragment>
      )}
    </Container>
  );
};

export {ShoppingCart};
