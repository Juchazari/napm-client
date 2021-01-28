import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #e0e6e8;
  border-radius: 4px;
  font-size: 1rem;
  color: #888888;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px #a6d5fa;
  }

  &::placeholder {
    color: #dedede;
  }
`;