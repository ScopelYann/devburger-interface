import styled from 'styled-components';
import bg1 from '../../assets/LoginBg 1.svg';
import bg2 from '../../assets/LoginBg 2.svg';
import { standardTheme } from '../../styles/themes/standard';

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${standardTheme.black} !important;
  font-family: ${standardTheme.roadRageFont};
`;

export const RightContainer = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: url(${bg2});
  background-size: 105vw;

  h2 {
    width: 368px;
    height: 80px;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    color: ${standardTheme.white};

    span {
      color: ${standardTheme.purple};
    }
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  text-align: center;
  background: url(${bg1});
  background-size: cover;

  img {
    width: 70%;
  }
`;

export const Form = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  .NotAccount {
    color: ${standardTheme.white};
    text-align: center;
    margin-top: 42px;
    font-family: ${standardTheme.poppinsFont};

    a {
      color: ${standardTheme.white};
    }
  }

  .errorMensageP {
    position: relative;
    bottom: 100px;
    color: ${standardTheme.darkRed};
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    margin-top: 10px;
    height: 10px;
  }
`;

export const Button = styled.button`
  color: ${standardTheme.white};
  background-color: ${standardTheme.purple};
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 5px;
  font-size: 35px;
  font-weight: 400;
  margin-top: 50px;
  font-family: ${(props) => (props.theme ? 'Road Rage' : 'poppins')};

  &:hover {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
    background-color: ${standardTheme.darkPurple};
  }
`;
