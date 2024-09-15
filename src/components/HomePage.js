import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const HeroSection = styled.div`
  background-image: url('https://example.com/your-image.jpg'); /* استبدل برابط صورة الخلفية */
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  margin-bottom: 40px;
`;

const HeroText = styled.h1`
  font-size: 48px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const HomePage = () => (
  <HomePageContainer>
    <HeroSection>
      <HeroText>Welcome to MY Cafe</HeroText>
    </HeroSection>
    <Paragraph>Your favorite place for delicious food and a cozy ambiance.</Paragraph>
  </HomePageContainer>
);

export default HomePage;
