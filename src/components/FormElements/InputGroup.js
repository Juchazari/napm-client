import styled from 'styled-components';

export const InputGroup = styled.div`
  margin-top: ${props => (props.mt && props.mt)};
  margin-right: ${props => (props.mr && props.mr)};
  margin-bottom: ${props => (props.mb && props.mb)};
  margin-left: ${props => (props.ml && props.ml)};
`;

InputGroup.defaultProps = {
  mb: '1rem',
};