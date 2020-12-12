import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import styled from 'styled-components';
import FormCard from '../components/FormCard';
import Form from '../components/Form';
import Button from '../components/Button';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Page>
      <PageHeader to="/">
        <Logo />
      </PageHeader>
      <FormCard>
        <FormCard.Header>Forgot password?</FormCard.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="forgotpw-email-input">
            <Form.Label>Email Address</Form.Label>
            <Form.Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Button type="submit" full>Send instructions</Button>
        </Form>
        <FormCard.Footer>
          <span>
            Return to log in?
            <LoginLink to="/login">Log in</LoginLink>
          </span>
        </FormCard.Footer>
      </FormCard>
    </Page>
  );
}

export default Forgot;