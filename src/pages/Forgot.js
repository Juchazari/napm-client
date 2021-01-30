import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputGroup, Label, Input } from '../components/Forms';
import { Button } from '../components/Button';
import CloseButton from '../components/CloseButton';

const ForgotPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 550px 1fr;
  align-items: center;
  justify-items: center;

  @media (max-width: 1064px) {
    grid-template-columns: 450px 1fr;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    min-height: 0;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121212;

  @media (max-width: 950px) {
    display: none;
  }
`;

const AuthContent = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 0 32px;

  @media (max-width: 950px) {
    margin-top: 60px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  color: #959595;
  font-size: 14px;
`;

const LoginLink = styled(Link)`
  margin-left: 4px;
  color: #4990ED;
`;

const MessageWrapper = styled.div`
  text-align: center;
  color: #959595;
  margin-bottom: 32px;
`;

function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ForgotPage>
      <CloseButton as={Link} to="/" />
      <Placeholder />
      <AuthContent>
        <Title>Forgot password?</Title>
        <MessageWrapper>
          <p>Not to worry! Enter the email address associeted with your account and we'll send you some instructions.</p>
        </MessageWrapper>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="forgot-email">Email</Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="forgot-email"
              autoFocus
              required
            />
          </InputGroup>
          <Button full>Send instructions</Button>
        </form>
        <LinksWrapper>
          <p>
            Return to log in?
            <LoginLink to="/login">Log in</LoginLink>
          </p>
        </LinksWrapper>
      </AuthContent>
    </ForgotPage>
  );
}

export default Forgot;