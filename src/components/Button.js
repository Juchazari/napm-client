import styled from 'styled-components';

export const Button = styled.button`
  min-width: 64px;
  width: ${props => (props.full && '100%')};
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #2c2e33;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: #363942;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #ffffff;
  border: 1px solid #2c2e33;
  color: #333;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const GoogleButton = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  color: #333;

  svg {
    margin-right: 8px;
    width: 1.25em;
    height: 1.25em;
  }

  &:hover {
    background-color: transparent;
    border-color: #d0d0d0;
  }
`;