import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f8f9fa;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #f8f9fa;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Cafe</Logo>
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/menu">Menu</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Nav>
  </HeaderContainer>
);

export default Header;
