import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const HeroSection = styled.div`
  background-image: url('/path/to/your/hero-image.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: dark;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const HeroText = styled.h1`
  font-size: 48px;
`;

const HomePage = () => (
  <HomePageContainer>
    <HeroSection>
      <HeroText>Welcome to Our Cafe</HeroText>
    </HeroSection>
    <p>Your favorite place for delicious food and great ambiance.</p>
  </HomePageContainer>
);

export default HomePage;
