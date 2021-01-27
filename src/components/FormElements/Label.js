import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  margin-bottom: ${props => (props.mb && props.mb)};
  font-size: 14px;
  color: #888888;
`;

Label.defaultProps = {
  mb: '0.5rem',
};