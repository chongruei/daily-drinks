import React from 'react';

import {DrinkingList} from '../../mock';
import {Container} from './styles';
import {Product} from './Product/Product';

const ProductList = () => {
  return (
    <Container>
      {DrinkingList.map(drink => (
        <Product key={drink.id} product={drink} />
      ))}
    </Container>
  );
};

export {ProductList};
