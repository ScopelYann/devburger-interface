import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  background: linear-gradient(rgba(55, 55, 55), rgba(100, 100, 100));
  cursor: grab;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  div {
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: ${props => props.theme.poppinsFont};

    p {
      font-size: 18px;
      color: ${standardTheme.orange};
      line-height: 20px;
      font-weight: 700;
      margin-top: 40px;
      margin-bottom: 10px;
    }

    strong {
      font-weight: 800;
      /* color: #c6c6c739; */
      color: ${standardTheme.white};
      font-size: 22px;
      line-height: 20px;
    }
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: -50px;
  height: 100px;
  user-select: none;
  transform: rotateZ(-10deg);
`;
