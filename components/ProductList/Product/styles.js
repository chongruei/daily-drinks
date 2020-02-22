import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 13px;
  border: solid 1px #ffffff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px 0px;
  width: 135px;
  height: fit-content;
  padding: 10px;
  margin: 15px;
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 250px;

  @media (max-width: 768px) {
    width: 50%;
    height: 100px;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 8px;
  font-weight: bold;
  padding: 8px 5px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Price = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;

  &:before {
    content: '$';
    font-size: 10px;
    font-weight: normal;
    padding-right: 3px;
  }
  &:after {
    content: 'NTD';
    font-size: 10px;
    font-weight: normal;
    padding-left: 3px;
  }

  @media (min-width: 768px) {
    font-size: 30px;

    &:before {
      font-size: 15px;
    }
    &:after {
      font-size: 15px;
    }
  }
`;

const Button = styled.div`
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background: #4caf50;
  border-radius: 5px;
  padding: 8px 16px;
  transition: 300ms background;

  &:hover {
    cursor: pointer;
    background: #00661a;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export {Container, Img, Title, Price, Button};
