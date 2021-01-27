import React from 'react'
import styled from 'styled-components';
import {
  RiMenuLine,
  RiDashboardFill,
  RiPieChartFill,
  RiNotification3Fill,
  RiSettings3Fill,
  RiLogoutBoxRFill
} from 'react-icons/ri';

const IconWrapper = styled.div`
  width: ${props => (props.size ? `${props.size}px` : '20px')};
  height: ${props => (props.size ? `${props.size}px` : '20px')};
  user-select: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

function IconType({ type }) {
  switch (type) {
    case 'toggler':
      return <RiMenuLine />;
    case 'projects':
      return <RiDashboardFill />;
    case 'insights':
      return <RiPieChartFill />;
    case 'inbox':
      return <RiNotification3Fill />;
    case 'settings':
      return <RiSettings3Fill />;
    case 'logout':
      return <RiLogoutBoxRFill />;
  }
}

function Icon({ type, size, ...props }) {
  return (
    <IconWrapper size={size} {...props}>
      <IconType type={type} />
    </IconWrapper>
  );
}

export default Icon;