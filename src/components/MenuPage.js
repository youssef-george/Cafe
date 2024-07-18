import React from 'react';
import styled from 'styled-components';

const MenuPageContainer = styled.div`
  padding: 20px;
`;

const MenuItems = styled.div`
  background-color: white;
  border: 5px solid gray;
  padding: 50px;
  margin: 10px 0;
  border-radius: 10px;
`;

const MenuPage = () => (
  <MenuPageContainer>
    <h1>Our Menu</h1>
    <MenuItems>
      <h2>Item 1</h2>
      <p>Description of Item 1</p>
    </MenuItems>
    <MenuItems>
      <h2>Item 2</h2>
      <p>Description of Item 2</p>
    </MenuItems>
  </MenuPageContainer>
);

export default MenuPage;
