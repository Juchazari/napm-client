import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { EntryBox, EntryTitle, EntryFooter } from '../components/Entry';
import { InputGroup, Label, Input } from '../components/FormElements';
import { Button, GoogleButton } from '../components/Button';
import Divider from '../components/Divider';
import Logo from '../components/Logo';

const SignupPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

const HomeLink = styled(Link)`
  margin: 40px 0;
`;

const LoginLink = styled(Link)`
  margin-left: 8px;
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
      <HomeLink to="/">
        <Logo size="130" />
      </HomeLink>
      <EntryBox>
        <EntryTitle>
          Sign up
        </EntryTitle>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="signup-name">Full Name</Label>
            <Input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="signup-name"
              autoFocus
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="signup-email">Email Address</Label>
            <Input
              type="text"
              placeholder="name@email.com"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="signup-password"
              required
            />
          </InputGroup>
          <Button type="submit" full>Sign up</Button>
        </form>
        <Divider />
        <GoogleButton full>
          <FcGoogle />
          Continue with Google
        </GoogleButton>
        <EntryFooter>
          <span>
            Already have an account?
            <LoginLink to="/login">Log in</LoginLink>
          </span>
        </EntryFooter>
      </EntryBox>
    </SignupPage>
  );
}

export default Signup;