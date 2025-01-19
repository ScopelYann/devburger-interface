import styled from 'styled-components';
import imgHome from '../../assets/HomeIMG.svg';
import background from '../../assets/LoginBg 2.svg';

import { standardTheme } from '../../styles/themes/standard';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Banner = styled.div`
  background: url(${imgHome});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 457px;
  width: 100%;

  h1 {
    display: flex;
    justify-content: end;
    margin-right: 209px;
    margin-top: 60px;
    font-family: ${standardTheme.roadRageFont};
    font-size: 82px;
    color: ${standardTheme.white};
  }
`;

export const Container = styled.section`
  overflow: hidden;
  background: linear-gradient(
      rgba(255, 255, 255, 0.32),
      rgba(255, 255, 255, 0.32)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

