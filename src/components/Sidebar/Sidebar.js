import React from 'react';
import {
  RiMenuLine as MenuIcon,
  RiDashboardFill as HomeIcon,
  RiPieChartFill as InsightsIcon,
  RiNotification3Fill as InboxIcon,
  RiSettings3Fill as SettingsIcon,
  RiLogoutBoxRFill as LogoutIcon
} from 'react-icons/ri';
import { ReactComponent as Logo } from '../../assets/images/logo-light.svg';
import { MainSidebar, Header, Controls, NavItemLink, NavItem, ToolTip } from './styles/Sidebar';

function Sidebar({isExpanded, setIsExpanded}) {

  function toggler() {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <MainSidebar isExpanded={isExpanded}>
      <Header>
        <MenuIcon onClick={toggler} />
        <Logo className="logo" />
      </Header>
      <NavItemLink to="/dashboard" data-tip="Home" activeClassName="active" exact>
        <HomeIcon />
        <span>Home</span>
      </NavItemLink>
      <NavItemLink to="/dashboard/insights" data-tip="Insights" activeClassName="active">
        <InsightsIcon />
        <span>Insights</span>
      </NavItemLink>
      <NavItemLink to="/dashboard/inbox" data-tip="Inbox" activeClassName="active">
        <InboxIcon />
        <span>Inbox</span>
      </NavItemLink>
      <Controls>
        <NavItemLink to="/dashboard/settings" data-tip="Settings" activeClassName="active">
          <SettingsIcon />
          <span>Settings</span>
        </NavItemLink>
        <NavItem data-tip="Log out">
          <LogoutIcon />
          <span>Log out</span>
        </NavItem>
      </Controls>
      {!isExpanded && <ToolTip effect="solid" place="right" />}
    </MainSidebar>
  );
}

export default Sidebar;