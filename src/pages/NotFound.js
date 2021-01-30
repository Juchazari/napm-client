import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundPage = styled.div`
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

const Logo = styled(Link)`
  font-size: 48px;
  font-weight: 600;
`;

function NotFound() {
  return (
    <NotFoundPage>
      <Logo to="/">NAPM</Logo>
      <p>Sorry, that page doesn't exist!</p>
    </NotFoundPage>
  );
}

export default NotFound;