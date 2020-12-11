import React from 'react';
import styled from 'styled-components';

const StyledFormCard = styled.div`
  max-width: 450px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  padding: 50px;
  margin-bottom: 40px;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Divider = styled.span`
  display: block;
  text-align: center;
  margin: 24px 0;
  font-size: 14px;
  color: #888888;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  color: #888888;
  font-size: 14px;
  a {
    color: #a9acff;
    text-decoration: none;
  }
`;

function FormCard({ children }) {
  return <StyledFormCard>{children}</StyledFormCard>;
}

FormCard.Header = function FormCardHeader({ children }) {
  return <Header>{children}</Header>;
};

FormCard.Footer = function FormCardFooter({ children }) {
  return <Footer>{children}</Footer>
}

FormCard.Divider = function FormCardDivider() {
  return <Divider>OR</Divider>
};

export default FormCard;