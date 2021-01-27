import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  a {
    margin-bottom: 16px;
    svg {
      width: 150px;
    }
  }
  h1 {
    font-weight: 400;
  }
`;

function NotFound() {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <h1>Sorry, that page doesn't exist!</h1>
    </Container>
  );
}

export default NotFound;