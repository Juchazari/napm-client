import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Page,
  Content,
  Title,
  LinksWrapper,
  HomeButton,
  PageLink } from '../components/LSF';
import { InputGroup, Input, Label } from '../components/Forms';
import { Button, GoogleButton } from '../components/Button';
import Divider from '../components/Divider';
import Icon from '../components/Icon';

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121212;

  @media (max-width: 950px) {
    display: none;
  }
`;

const ForgotLink = styled(PageLink)`
  margin-bottom: 8px;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Page>
      <HomeButton as={Link} to="/">
        <Icon type="close" size="24" />
      </HomeButton>
      <Placeholder />
      <Content>
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
          <ForgotLink as={Link} to="/forgot">Forgot password?</ForgotLink>
          <p>
            Don't have an account?
            <PageLink as={Link} to="/signup">Sign up</PageLink>
          </p>
        </LinksWrapper>
      </Content>
    </Page>
  );
}

export default Login;