import styled from 'styled-components';
import imgHome from '../../assets/menuBackground.svg';
import background from '../../assets/LoginBg 2.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #f0f0f0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.32),
      rgba(255, 255, 255, 0.32)
    ),
    url(${background});
`;

export const Banner = styled.div`
  bottom: 25px;
  background: url(${imgHome});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 480px;
  width: 100%;
  position: relative;

  h1 {
    position: absolute;
    right: 10%;
    top: 10%;
    margin-top: 60px;
    font-family: Road Rage;
    font-size: 80px;
    color: white;

    span {
      display: block;
      color: rgba(206, 203, 203, 0.72);
      font-size: 15px;
      font-family: poppins;
    }
  }

  /* span {
    display: flex;
    justify-content: end;
    margin-right: 290px;
    
  } */
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  cursor: pointer;
  background: none;
`;

export const CategoryButton = styled(Link)`
  font-family: poppins;
  color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '2px solid #9758a6'};
`;

export const ProductsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  padding: 40px;
  margin: 50px auto;
  max-width: 1280px;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  p {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    left: 5%;
    color: #975a86;
    font-size: 22px;
    font-family: poppins;
    font-weight: 600;
    img {
      position: absolute;
      left: -40%;
      transform: rotate(180deg);
    }
  }
`;
