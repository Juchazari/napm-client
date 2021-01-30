import styled from 'styled-components';

const Divider = styled.span`
  display: block;
  width: 100%;
  margin: 24px 0;
  overflow: hidden;
  text-align: center;
  color: #cacaca;
  font-size: 14px;
  user-select: none;

  &:before, &:after {
    content: "";
    display: inline-block;
    width: 50%;
    margin: 0 8px 0 -50%;
    vertical-align: middle;
    border-bottom: 1px solid;
  }

  &:after {
    margin: 0 -50% 0 8px;
  }
`;

export default Divider;