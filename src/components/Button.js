import styled from 'styled-components';

export const Button = styled.button`
  min-width: 64px;
  width: ${props => (props.full && '100%')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #252525;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2C2C2C;
  }
`;

export const OutlineButton = styled(Button)`
  border: 2px solid #252525;
  padding: 6px 14px;
  background-color: #FFFFFF;
  color: #252525;

  &:hover {
    background-color: #F9F9F9;
  }
`;

export const GoogleButton = styled(Button)`
  background-color: #1A73E8;
  color: #FFFFFF;

  &:hover {
    background-color: #2A7DEA;
  }
`;

export const IconButton = styled.button`
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  background-color: #ededed;
  color: #252525;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e5e5;
  }
`;