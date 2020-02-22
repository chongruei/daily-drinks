import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  display: flex;
  justify-content: end;
  align-items: baseline;
  position: fixed;
  flex-direction: column;
  width: 100%;
  height: ${props => (props.toggle ? '100%' : '50px')};
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px 0px;
  transition: 0.3s all;
  user-select: none;

  @media (min-width: 768px) {
    transition: 0.3s width;
    height: 100%;
    width: ${props => (props.toggle ? '450px' : '0')};
    right: 0;
    border: rgba(0, 0, 0, 0.1);
  }
`;

const Cart = styled.div`
  height: ${props => (props.toggle ? '110px' : '50px')};
  width: 100%;
  background: url(static/cart.svg) no-repeat;
  background-color: white;
  background-size: contain;
  background-position: top;
  border-bottom: ${props =>
    props.toggle ? 'solid 1px rgba(0, 0, 0, 0.1)' : '0'};

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    position: absolute;
    height: 60px;
    width: ${props => (props.toggle ? '100%' : '60px')};
    right: ${props => (props.toggle ? 'auto' : '20px')};
  }
`;

const PurchaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding: 75px 15px 100px 15px;
  }
`;

const Item = props => {
  const {
    imgUrl,
    prodName,
    quantity,
    totalPrice,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = props;

  return (
    <ItemContainer>
      <ItemImg src={imgUrl} />
      <ItemContent>
        <ItemSpan>{prodName}</ItemSpan>
        <ItemSpan>數量:{quantity}</ItemSpan>
      </ItemContent>
      <ItemControl>
        <ItemCancel onClick={removeProduct} />
        <ItemSpan>${totalPrice} NTD</ItemSpan>
        <ItemModifyContainer>
          <ItemModify onClick={increaseProductQuantity}>+</ItemModify>
          <ItemModify onClick={decreaseProductQuantity}>-</ItemModify>
        </ItemModifyContainer>
      </ItemControl>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 10px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`;

const ItemImg = styled.img`
  flex: 1;
  width: 100px;
  height: 100px;
`;

const ItemContent = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  padding: 5px 15px;
`;

const ItemSpan = styled.span`
  font-weight: bold;
  margin: 2px 0px;
`;

const ItemCancel = styled.div`
  width: 16px;
  height: 16px;
  background-size: auto 100%;
  background-image: url('static/sprite_delete-icon.png');
  background-repeat: no-repeat;
  margin-bottom: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ItemModifyContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
`;

const ItemModify = styled.div`
  width: 25px;
  height: 25px;
  background: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: white;
    background: black;
  }
`;

const ItemControl = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

const Checkout = props => {
  const {totalPrice} = props;
  return (
    <CheckoutContainer>
      <CheckContainer>
        <CheckoutTitle>${totalPrice}</CheckoutTitle>
        <CheckoutButton>結帳</CheckoutButton>
      </CheckContainer>
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding: 5px 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.2) 0px -5px 5px 0px;
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const CheckoutButton = styled.div`
  width: 50%;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background: #000000;
  border-radius: 5px;
  padding: 8px 16px;
  transition: 300ms background;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 5px 0px;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const CheckoutTitle = styled.p`
  font-size: 20px;
  font-weight: bold;

  &:before {
    content: '總共: ';
    font-size: 10px;
  }
  &:after {
    content: ' NTD';
    font-size: 10px;
  }
`;

export {Container, Cart, PurchaseContainer, Item, Checkout};
