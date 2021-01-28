import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { EntryBox, EntryTitle, EntryFooter } from '../components/Entry';
import { InputGroup, Label, Input } from '../components/FormElements';
import { Button } from '../components/Button';
import Logo from '../components/Logo';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

const HomeLink = styled(Link)`
  margin: 40px 0;
`;

const LoginLink = styled(Link)`
  margin-left: 8px;
`;

function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Page>
      <HomeLink to="/">
        <Logo size="130" />
      </HomeLink>
      <EntryBox>
        <EntryTitle>Forgot password?</EntryTitle>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="forgot-email">Email Address</Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="forgot-email"
              autoFocus
            />
          </InputGroup>
          <Button type="submit" full>Send instructions</Button>
        </form>
        <EntryFooter>
          <span>
            Return to log in?
            <LoginLink to="/login">Log in</LoginLink>
          </span>
        </EntryFooter>
      </EntryBox>
    </Page>
  );
}

export default Forgot;