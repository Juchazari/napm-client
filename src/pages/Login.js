import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import styled from 'styled-components';
import FormCard from '../components/FormCard';
import Form from '../components/Form';
import Button from '../components/Button';

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

const PageHeader = styled(Link)`
  margin: 40px 0;
  svg { width: 130px; }
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
      <PageHeader to="/">
        <Logo />
      </PageHeader>
      <FormCard>
        <FormCard.Header>
          Log in
        </FormCard.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="login-email">
            <Form.Label>Email Address</Form.Label>
            <Form.Input
              type="text"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group controlId="login-password">
            <Form.Label>Password</Form.Label>
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" full>Log in</Button>
        </Form>
        <FormCard.Divider />
        <Button icon={<FcGoogle />} colorScheme="google" full>
          Continue with Google
        </Button>
        <FormCard.Footer>
          <ForgotLink to="/forgot">Forgot password?</ForgotLink>
          <span>
            Don't have an account?
            <SignupLink to="/signup">Sign up</SignupLink>
          </span>
        </FormCard.Footer>
      </FormCard>
    </LoginPage>
  );
}

export default Login;