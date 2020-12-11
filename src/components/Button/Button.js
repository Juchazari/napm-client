import React from 'react';
import styled, { css } from 'styled-components';

const IconButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 8px;
    width: 1.25em;
    height: 1.25em;
  }
`;

const GoogleColorScheme = css`
  // border: 1px solid #e0e0e0;
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 1px rgba(0, 0, 0, 0.06);
  &:hover { box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.05), 0 3px 4px 3px rgba(0, 0, 0, 0.05); }
`;

const primaryColorScheme = css`
  background-color: #2c2e33;
  color: #ffffff;
  &:hover { background-color: #363942; }
`;

const CustomButton = styled.button`
  ${props => props.icon && IconButtonStyles}
  min-width: 64px;
  width: ${props => props.full ? '100%' : null};
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  ${props => props.colorScheme === "google" ? GoogleColorScheme : primaryColorScheme}
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
`;

function Button({ children, ...props }) {
  return (
    <CustomButton {...props}>
      {props.icon ? props.icon : null}
      {children}
    </CustomButton>
  );
}

export default Button;