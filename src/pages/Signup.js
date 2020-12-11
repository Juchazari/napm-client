import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import styled from 'styled-components';
import FormCard from '../components/FormCard';
import Form from '../components/Form';
import Button from '../components/Button';

const SignupPage = styled.div`
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
      <PageHeader to="/">
        <Logo />
      </PageHeader>
      <FormCard>
        <FormCard.Header>
          Sign up
        </FormCard.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Input
              type="text"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" full>Sign up</Button>
        </Form>
        <FormCard.Divider />
        <Button icon={<FcGoogle />} colorScheme="google" full>
          Continue with Google
        </Button>
        <FormCard.Footer>
          <span>
            Already have an account?
            <LoginLink to="/login">Log in</LoginLink>
          </span>
        </FormCard.Footer>
      </FormCard>
    </SignupPage>
  );
}

export default Signup;