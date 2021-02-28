import styled from 'styled-components';

export const Button = styled.button`
  min-width: 80px;
  min-height: 37px;
  width: ${props => (props.full && '100%')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  padding: 0 16px;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1b1b1b;
  }
`;

export const GoogleButton = styled(Button)`
  background-color: #1a73e8;
  color: #ffffff;

  &:hover {
    background-color: #2a7dea;
  }
`;

export const IconButton = styled(Button)`
  min-width: 32px;
  min-height: 32px;
  padding: 0;
  background-color: transparent;
  color: inherit;

  &:hover {
    background-color: #f0f0f0;
  }
`;