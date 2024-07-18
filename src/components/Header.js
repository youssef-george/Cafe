import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  transition: color 0.3s ease;
  &:hover {
    color: #007bff;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Lali Cafe</Logo>
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/menu">Menu</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Nav>
  </HeaderContainer>
);

export default Header;
