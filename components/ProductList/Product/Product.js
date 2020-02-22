import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Container, Img, Title, Price, Button} from './styles';
import {addProduct} from '../../../services/cart/actions';

const Product = ({product}) => {
  const {name, imgUrl, price} = product;
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  return (
    <Container>
      <Img src={imgUrl} />
      <Title>{name}</Title>
      <Price>{price}</Price>
      <Button
        onClick={() => {
          if (products.find(p => p.id === product.id)) {
            alert('已在商品清單');
            return;
          }
          dispatch(
            addProduct({...product, quantity: 1, totalPrice: product.price}),
          );
        }}
      >
        購買
      </Button>
    </Container>
  );
};

export {Product};
