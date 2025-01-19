import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${standardTheme.poppinsFont};
  font-size: 17px;
  width: 100%;
  height: 50px;
  background: ${standardTheme.darkPurple};
  color: ${standardTheme.white};
`;
