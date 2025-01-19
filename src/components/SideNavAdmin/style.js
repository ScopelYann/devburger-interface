import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { standardTheme } from '../../styles/themes/standard';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${standardTheme.black};
  color: ${standardTheme.white};
  font-family: ${standardTheme.poppinsFont};
  img {
    width: 60%;
    margin: 40px 0;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 12px;
  text-decoration: none;
  color: ${standardTheme.white};
  background: ${props => props.$IsActive ? standardTheme.purple : 'transparent'} ;

  &:hover {
    background: ${standardTheme.purple};
  }
`;
export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`;
