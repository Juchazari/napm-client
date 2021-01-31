import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Icon from './Icon';

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 16px;
  background-color: #121212;
  color: #ffffff;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 16px 24px;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  user-select: none;

  &:hover, &.active {
    background-color: #1a1a1a;
  }

  &.active {
    box-shadow: 3px 0px 0px inset #1A73E8;
  }
`;

const ToolTip = styled(ReactTooltip)`
  font-size: 12px !important;
  padding: 5px 10px !important;
  background-color: #252525 !important;

  &.place-right:after {
    border-right-color: #252525 !important;
    border-right-style: solid !important;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <NavItem to="/" data-tip="Home" activeClassName="active" exact>
        <Icon type="dashboard" size="20" />
      </NavItem>
      <NavItem to="/settings" data-tip="Settings" activeClassName="active">
        <Icon type="settings" size="20" />
      </NavItem>
      <NavItem as="button" data-tip="Log out">
        <Icon type="logout" size="20" />
      </NavItem>
      <ToolTip effect="solid" place="right" />
    </StyledSidebar>
  );
}

export default Sidebar;