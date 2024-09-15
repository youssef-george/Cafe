import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactPage = () => (
  <ContactPageContainer>
    <h1>Contact Us</h1>
    <ContactForm>
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Your Email" />
      <TextArea rows="4" placeholder="Your Message" />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
  </ContactPageContainer>
);

export default ContactPage;
