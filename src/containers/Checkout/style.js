import styled from 'styled-components';
import background from '../../assets/backgroundCart.svg';
import bg from '../../assets/LoginBg 2.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12)
    ),
    url(${bg});
    min-height: 100vh;
    height: 100%;

`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 193px;
  background-position: center;

  img {
    width: 180px;
    height: 165.44px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 28%; 
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;
