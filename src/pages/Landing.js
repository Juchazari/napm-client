import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Button, OutlineButton } from '../components/Button';

const LandingPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ActionButtons = styled.div`
  max-width: 175px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

function Landing() {
  return (
    <LandingPage>
      <Logo size="250" />
      <ActionButtons>
        <OutlineButton as={Link} to="/login">Log in</OutlineButton>
        <Button as={Link} to="/signup">Sign up</Button>
      </ActionButtons>
    </LandingPage>
  );
}

export default Landing;