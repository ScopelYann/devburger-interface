import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Containerr = styled.div`
  width: 100%;
  background: ${standardTheme.white};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 20px;
  color: ${standardTheme.secondBlack};

  * {
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 1 35%;
    font-family: ${standardTheme.poppinsFont};
    grid-template-areas:
      'title title'
      'itens itens-price'
      'deliveryTax deliveryTaxPrice';
    .title {
      grid-area: title;
      color: #fff;
      font-family: ${standardTheme.poppinsFont};
      font-weight: 700;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      text-align: center;
      margin-bottom: 20px;
      background: ${standardTheme.secondBlack};
      padding: 15px;
    }
    .itens {
      grid-area: itens;
      padding: 20px;
    }
    .itensPrice {
      grid-area: itens-price;
      padding: 20px 10px 10px 10px;
    }
    .DeliveryTax {
      padding: 20px;
      grid-area: deliveryTax;
    }
    .DeliveryTaxPrice {
      padding: 20px 10px 10px 10px;
      grid-area: deliveryTaxPrice;
    }
  }

  .container-bottom {
    padding: 20px;
    display: grid;
    grid-gap: 20px 33%;
    grid-template-areas: 'TitleTotal TotalPrice';
    width: 361px;
    font-size: 20px;
    margin-top: 40px;
    font-family: ${standardTheme.poppinsFont};

    .TitleTotal {
      font-weight: bold;
      grid-area: TitleTotal;
    }
    .TotalPrice {
      font-weight: bold;
      grid-area: TotalPrice;
    }
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
  font-family: ${(props) => (props.theme ? 'Road Rage' : 'poppins')};

  &:hover {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
    background-color: ${standardTheme.darkPurple};
  }
`;
