import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';


export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 22px;
`;

export const Title = styled.h1`
  font-family: ${standardTheme.poppinsFont};
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  color: ${(props) => (props ? props.theme : '#9758A6')};
`;

export const Border = styled.div`
  width: 57px;
  height: 4px;
  margin-top: 12px;
  background-color: ${(props) => (props ? props.theme : '#9758A6')};
`;
