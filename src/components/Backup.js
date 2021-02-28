import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const ToolTip = styled(ReactTooltip)`
  font-size: 12px !important;
  padding: 5px 10px !important;
  background-color: #1A1A1A !important;
  opacity: 1 !important;

  &.place-right:after {
    border-right-color: #1A1A1A !important;
    border-right-style: solid !important;
  }
`;

<ToolTip effect="solid" place="right" />