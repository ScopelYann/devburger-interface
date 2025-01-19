import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Inputs = styled.input`
  width: 350px;
  height: 50px;
  font-size: 17px;
  border-radius: 5px;
  border: none;
  padding-left: 16px;

`;

export const Label = styled.label`
  display: flex;
  margin-top: 5%;
  margin-right: 80%;
  width:100%;
  color: ${standardTheme.white};
  font-family: ${standardTheme.poppinsFont};
`;
