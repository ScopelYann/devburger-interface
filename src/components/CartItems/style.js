import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';


export const ProductImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  position: relative;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${standardTheme.purple};
  color: ${standardTheme.white};
  border: none;
  border-radius: 10px;
  transition: all 0.4s;

  &:hover {
    background: ${({ $IsLimit }) => ($IsLimit ? '#d3d3d3' : '#6f357c')};
    cursor: ${({ $IsLimit }) => ($IsLimit ? 'not-allowed' : 'pointer')};
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  left: 32%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
