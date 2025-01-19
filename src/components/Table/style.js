import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Root = styled.table`
  width: 90%;
  height: 20px;
  border-collapse: collapse;
  background: ${standardTheme.white};
  border-radius: 20px;
  font-family: ${standardTheme.poppinsFont};
  overflow: hidden;

`;

export const Header = styled.thead`
border-radius: 20px`;

export const Tr = styled.tr`
  background: ${standardTheme.secondBlack};
`;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: ${standardTheme.white};
  border-bottom: 1px solid #cdcdcd;
  border-radius: 20px;

`;

export const Td = styled.td`
  padding: 16px;
  color: ${standardTheme.white};
  line-height: 115%;
`;

export const Body = styled.tbody`
  .ProductsArea {
    background: ${standardTheme.white};

    .ItensProductsArea {
      color: ${standardTheme.secondBlack};
    }
  }

  .TotalPriceForProducts {
    text-overflow: ellipsis;
  }

  button{
    border: none;
  }
`;
