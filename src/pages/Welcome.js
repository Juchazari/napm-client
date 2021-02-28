import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const LandingPage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-size: 48px;
  user-select: none;
`;

const ButtonsWrapper = styled.div`
  max-width: 180px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

function Landing() {
  return (
    <LandingPage>
      <Logo>NAPM</Logo>
      <ButtonsWrapper>
        <Button as={Link} to="/login">Log in</Button>
        <Button as={Link} to="/signup">Sign up</Button>
      </ButtonsWrapper>
    </LandingPage>
  );
}

export default Landing;