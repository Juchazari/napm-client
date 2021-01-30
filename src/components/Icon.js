import styled from 'styled-components';
import { RiGoogleFill as GoogleIcon } from 'react-icons/ri';

const Wrapper = styled.div`
  width: ${props => (props.size ? `${props.size}px` : '16px')};
  height: ${props => (props.size ? `${props.size}px` : '16px')};
  margin-top: ${props => (props.mt && `${props.mt}px`)};
  margin-right: ${props => (props.mr && `${props.mr}px`)};
  margin-bottom: ${props => (props.mb && `${props.mb}px`)};
  margin-left: ${props => (props.ml && `${props.ml}px`)};

  svg {
    width: 100%;
    height: 100%;
  }
`;

function IconType({ type }) {
  switch (type) {
    case 'google':
      return <GoogleIcon />;
  }
}

function Icon({ type, size, mt, mr, mb, ml }) {
  return (
    <Wrapper size={size} mt={mt} mr={mr} mb={mb} ml={ml}>
      <IconType type={type} />
    </Wrapper>
  );
}

export default Icon;