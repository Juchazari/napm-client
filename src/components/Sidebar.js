import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  RiDashboardFill as DashboardIcon,
  RiSettings3Fill as SettingsIcon,
  RiLogoutBoxRFill as LogoutIcon
} from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';

// RiMenuLine
// RiPieChartFill
// RiNotification3Fill

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 16px;
  background-color: #252525;
  color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;

  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  border: none;
  padding: 16px 24px;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  user-select: none;

  &:hover, &.active {
    background-color: #2c2c2c;
  }

  &.active {
    box-shadow: 3px 0px 0px inset #ffffff;
  }
`;

const ToolTip = styled(ReactTooltip)`
  font-size: 12px !important;
  padding: 5px 10px !important;
  background-color: #1e272e !important;

  &.place-right:after {
    border-right-color: #1e272e !important;
    border-right-style: solid !important;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <NavItem to="/" data-tip="Home" activeClassName="active" exact>
        <DashboardIcon />
      </NavItem>
      <NavItem to="/settings" data-tip="Settings" activeClassName="active">
        <SettingsIcon />
      </NavItem>
      <NavItem as="button" data-tip="Log out">
        <LogoutIcon />
      </NavItem>
      <ToolTip effect="solid" place="right" />
    </StyledSidebar>
  );
}

export default Sidebar;