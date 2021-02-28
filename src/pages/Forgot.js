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
import { Button } from '../components/Button';
import Icon from '../components/Icon';

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121212;

  @media (max-width: 950px) {
    display: none;
  }
`;

const ForgotTitle = styled(Title)`
  margin-bottom: 8px;
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
    <Page>
      <CloseButton as={Link} to="/">
        <Icon glyph="close" size="24" />
      </CloseButton>
      <Placeholder />
      <Content>
        <ForgotTitle>Forgot password?</ForgotTitle>
        <MessageWrapper>
          <p>Not to worry! Enter the email address associated with your account and we'll send you some instructions.</p>
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
            <PageLink as={Link} to="/login">Log in</PageLink>
          </p>
        </LinksWrapper>
      </Content>
    </Page>
  );
}

export default Forgot;