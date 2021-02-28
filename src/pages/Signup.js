import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Page,
  Content,
  Title,
  LinksWrapper,
  CloseButton,
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

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Page>
      <CloseButton as={Link} to="/">
        <Icon glyph="close" size="24" />
      </CloseButton>
      <Placeholder />
      <Content>
        <Title>Sign up to Napm</Title>
        <GoogleButton full>
          <Icon glyph="google" size="16" mr="8" />
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
            <PageLink as={Link} to="/login">Log in</PageLink>
          </p>
        </LinksWrapper>
      </Content>
    </Page>
  );
}

export default Signup;