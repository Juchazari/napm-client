import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { EntryBox, EntryTitle, EntryFooter } from '../components/Entry';
import { InputGroup, Label, Input } from '../components/FormElements';
import { Button, GoogleButton } from '../components/Button';
import Divider from '../components/Divider';
import Logo from '../components/Logo';

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

const HomeLink = styled(Link)`
  margin: 40px 0;
`;

const ForgotLink = styled(Link)`
  margin-bottom: 8px;
`;

const SignupLink = styled(Link)`
  margin-left: 8px;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <LoginPage>
      <HomeLink to="/">
        <Logo size="130" />
      </HomeLink>
      <EntryBox>
        <EntryTitle>
          Log in
        </EntryTitle>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="login-email">Email Address</Label>
            <Input
              type="text"
              placeholder="name@email.com"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="login-password"
              required
            />
          </InputGroup>
          <Button type="submit" full>Log in</Button>
        </form>
        <Divider />
        <GoogleButton full>
          <FcGoogle />
          Continue with Google
        </GoogleButton>
        <EntryFooter>
          <ForgotLink to="/forgot">Forgot password?</ForgotLink>
          <span>
            Don't have an account?
            <SignupLink to="/signup">Sign up</SignupLink>
          </span>
        </EntryFooter>
      </EntryBox>
    </LoginPage>
  );
}

export default Login;