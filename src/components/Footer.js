import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #343a40;
  color: white;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} Lali Cafe. All rights reserved.
  </FooterContainer>
);

export default Footer;
