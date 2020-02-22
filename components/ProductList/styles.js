import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 25px;
  width: 85%;
  min-height: 600px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export {Container};
