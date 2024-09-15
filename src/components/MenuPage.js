import React from 'react';
import styled from 'styled-components';

const MenuPageContainer = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #f8f9fa;
`;

const MenuItems = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 30px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const MenuTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #333;
`;

const MenuItemTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #007bff;
`;

const MenuItemDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const MenuPage = () => (
  <MenuPageContainer>
    <MenuTitle>Our Menu</MenuTitle>
    <MenuItems>
      <MenuItemTitle>Item 1</MenuItemTitle>
      <MenuItemDescription>A delicious dish that you will love.</MenuItemDescription>
    </MenuItems>
    <MenuItems>
      <MenuItemTitle>Item 2</MenuItemTitle>
      <MenuItemDescription>Another fantastic item to try.</MenuItemDescription>
    </MenuItems>
  </MenuPageContainer>
);

export default MenuPage;
