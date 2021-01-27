import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import {
  RiMenuLine as Toggler,
  RiDashboardFill as HomeIcon,
  RiPieChartFill as InsightsIcon,
  RiNotification3Fill as InboxIcon,
  RiSettings3Fill as SettingsIcon,
  RiLogoutBoxRFill as LogoutIcon
} from 'react-icons/ri';

const Text = styled.p`
  font-size: 15px;
`;

const SidebarNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: ${props => (props.isExpanded ? '200px' : '52px')};
  height: 100%;
  background-color: #1e272e;
  color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;

  svg {
    width: 1.25em;
    height: 1.25em;
    margin-right: ${props => props.isExpanded ? '12px' : '0'};
    cursor: pointer;
    user-select: none;
  }

  ${Text} {
    display: ${props => (!props.isExpanded && 'none')};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 2px solid #323338;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover, &.active {
    background-color: rgba(0, 0, 0, 0.2);
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

function Sidebar({isExpanded, setIsExpanded}) {
  return (
    <SidebarNav isExpanded={isExpanded}>
      <Header>
        <Toggler onClick={() => setIsExpanded(!isExpanded)} />
      </Header>
      <NavItem to="/dashboard" data-tip="Projects" activeClassName="active" exact>
        <HomeIcon />
        <Text>Projects</Text>
      </NavItem>
      <NavItem to="/dashboard/insights" data-tip="Insights" activeClassName="active">
        <InsightsIcon />
        <Text>Insights</Text>
      </NavItem>
      <NavItem to="/dashboard/inbox" data-tip="Inbox" activeClassName="active">
        <InboxIcon />
        <Text>Inbox</Text>
      </NavItem>
      <Controls>
        <NavItem to="/dashboard/settings" data-tip="Settings" activeClassName="active">
          <SettingsIcon />
          <Text>Settings</Text>
        </NavItem>
        <NavItem as="div" data-tip="Log out">
          <LogoutIcon />
          <Text>Log out</Text>
        </NavItem>
      </Controls>
      {!isExpanded && <ToolTip effect="solid" place="right" />}
    </SidebarNav>
  );
}

export default Sidebar;