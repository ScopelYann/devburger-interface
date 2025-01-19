import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Container = styled.div`
  display: block;
  margin: 35px auto;

  .carousel-class {
    display: flex;
    justify-content: center;
  }

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
    &::before {
      font-size: 35px;
    }
  }
  .react-multiple-carousel__arrow--right {
    right: 12px;
    top: 10px;
    &::before {
      font-size: 35px;
    }
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${standardTheme.white};
  font-family: ${standardTheme.poppinsFont};
  font-size: 30px;
  max-width: 300px;
  width: 100%;
  height: 231px;
  border-radius: 10px;
  background: url('${(props) => props.imageurl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    position: absolute;
    top: 150px;
    left: 20px;
  }
  
`;

export const CategoryButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  padding: 10px 30px;
  border-radius: 30px;
  text-align: center;
  font-weight: 500;
  margin-top: 130px;
  color: #fff;
  text-decoration:none ;
  z-index: 10000;
  background: #00000090;


  &:hover{
    background-color: ${standardTheme.purple};
  }
`;
