import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const ContainerButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin: 10px auto;
  height: 52px;
  border: none;
  border-radius: 5px;
  background: ${standardTheme.purple};
  font-size: 30px;
  color: ${standardTheme.white};

  &::hover {
    background: ${standardTheme.darkPurple};
  }

  img {
  }
`;
