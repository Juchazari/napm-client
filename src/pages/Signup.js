import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputGroup, Label, Input } from '../components/Forms';
import { Button, GoogleButton } from '../components/Button';
import CloseButton from '../components/CloseButton';
import Divider from '../components/Divider';
import Icon from '../components/Icon';

const SignupPage = styled.div`
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
  margin-bottom: 32px;
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

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <SignupPage>
      <CloseButton as={Link} to="/" />
      <Placeholder />
      <AuthContent>
        <Title>Sign up to Napm</Title>
        <GoogleButton full>
          <Icon type="google" mr="8" />
          Continue with Google
        </GoogleButton>
        <Divider>OR</Divider>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="signup-name">Full name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="signup-name"
              autoFocus
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="signup-email">Email</Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="signup-email"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="signup-password">Password</Label>
            <Input
              type="password"
              placeholder="6+ characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="signup-password"
              required
            />
          </InputGroup>
          <Button full>Sign up</Button>
        </form>
        <LinksWrapper>
          <p>
            Already have an account?
            <LoginLink to="/login">Log in</LoginLink>
          </p>
        </LinksWrapper>
      </AuthContent>
    </SignupPage>
  );
}

export default Signup;