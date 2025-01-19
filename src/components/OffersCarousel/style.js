import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Container = styled.div`
  display: block;
  margin: 35px auto;

  .carousel-class {
    display: flex;
    justify-content: center;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow--left{
    left: 15px;
    top: 10px;
    background: none;


    &::before{
      color: ${standardTheme.purple};
      font-size: 44px;
    }
  }
  .react-multiple-carousel__arrow--right{
    right: 12px;
    top: 10px;
    background: none;
    
    

    &::before{
      color: ${standardTheme.purple};
      font-size: 44px;
      
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
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    position: absolute;
    top: 150px;
    left: 20px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    height: 37px;
    border-radius: 50px;
    text-align: center;
    background: #00000090;
  }
`;
