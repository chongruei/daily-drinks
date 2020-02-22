import React from 'react';
import styled from 'styled-components';

import {ProductList, ShoppingCart} from '../components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

const App = () => (
  <Container>
    <ProductList />
    <ShoppingCart />
  </Container>
);

export default App;
