import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { standardTheme } from '../../styles/themes/standard';

export const Container = styled.div`
  background: #1f1f1f;
  width: 100%;
  height: 72px;
  padding: 0 56px;
  font-family: poppins;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: 56px;
  }

  hr {
    height: 24px;
    border: 1px solid ${standardTheme.darkGray};
  }
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
  border-bottom: ${(props) => (props.$isActive ? '2px solid #9758a6' : 'none')};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: ${standardTheme.purple};
    transition: color 200ms;
  }
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  p {
    color: ${standardTheme.white};
    line-height: 90%;
    font-weight: 300;
    span {
      text-transform: capitalize;
      font-weight: 700;
      color: ${standardTheme.purple};
    }
  }
`;

export const LinkContainer = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  gap: 10px;
`;

export const Logout = styled.button`
  color: ${standardTheme.darkRed};
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;
