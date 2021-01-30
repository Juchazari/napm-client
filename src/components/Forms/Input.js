import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  font-size: 16px;
  color: #959595;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px #90BBF4;
  }

  &::placeholder {
    color: #d3d3d3;
  }
`;