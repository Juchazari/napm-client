import React from 'react'
import styled from 'styled-components';
import { RiCloseFill as Icon } from 'react-icons/ri';

const CloseButtonWrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background-color: #ededed;
  padding: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const CloseIcon = styled(Icon)`
  width: 100%;
  height: 100%;
  color: #464646;
`;

function CloseButton({ onClick, ...props }) {
  return (
    <CloseButtonWrapper onClick={onClick} {...props}>
      <CloseIcon />
    </CloseButtonWrapper>
  );
}

export default CloseButton;