import styled from 'styled-components';

const Divider = styled.span`
  display: block;
  text-align: center;
  margin: 24px 0;
  font-size: 14px;
  color: #888888;

  &:before {
    content: "OR"
  }
`;

export default Divider;