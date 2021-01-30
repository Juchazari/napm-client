import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputGroup, Label, Input } from '../components/Forms';
import { Button, GoogleButton } from '../components/Button';
import CloseButton from '../components/CloseButton';
import Divider from '../components/Divider';
import Icon from '../components/Icon';

const LoginPage = styled.div`
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

const ForgotLink = styled(Link)`
  margin-bottom: 8px;
  color: #4990ED;
`;

const SignupLink = styled(ForgotLink)`
  margin-left: 4px;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <LoginPage>
      <CloseButton as={Link} to="/" />
      <Placeholder />
      <AuthContent>
        <Title>Log in to Napm</Title>
        <GoogleButton full>
          <Icon type="google" mr="8" />
          Continue with Google
        </GoogleButton>
        <Divider>OR</Divider>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="login-email">Email</Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="login-email"
              autoFocus
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="login-password">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="login-password"
              required
            />
          </InputGroup>
          <Button full>Log in</Button>
        </form>
        <LinksWrapper>
          <ForgotLink to="/forgot">Forgot password?</ForgotLink>
          <p>
            Don't have an account?
            <SignupLink to="/signup">Sign up</SignupLink>
          </p>
        </LinksWrapper>
      </AuthContent>
    </LoginPage>
  );
}

export default Login;