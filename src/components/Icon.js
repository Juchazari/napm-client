import styled from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  position: relative;
  min-width: ${props => (props.size ? `${props.size}px` : '24px')};
  min-height: ${props => (props.size ? `${props.size}px` : '24px')};
  width: ${props => (props.size ? `${props.size}px` : '24px')};
  height: ${props => (props.size ? `${props.size}px` : '24px')};
  margin-top: ${props => (props.mt && `${props.mt}px`)};
  margin-right: ${props => (props.mr && `${props.mr}px`)};
  margin-bottom: ${props => (props.mb && `${props.mb}px`)};
  margin-left: ${props => (props.ml && `${props.ml}px`)};
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: inherit;
  fill: currentColor;
`;

function Glyph({ glyph }) {
  switch (glyph) {
    case 'google':
      return (
        <g>
          <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"/>
        </g>
      );
    case 'close':
      return (
        <g>
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
        </g>
      );
    case 'add':
      return (
        <g>
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>
        </g>
      );
  }
}

function Icon({ glyph, size, mt, mr, mb, ml }) {
  return (
    <SvgWrapper size={size} mt={mt} mr={mr} mb={mb} ml={ml}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Glyph glyph={glyph} />
      </Svg>
    </SvgWrapper>
  );
}

export default Icon;