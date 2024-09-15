import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // استيراد الأيقونات من react-icons

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} Lali Cafe. All rights reserved.
    <SocialIcons>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </SocialIcons>
  </FooterContainer>
);

export default Footer;
