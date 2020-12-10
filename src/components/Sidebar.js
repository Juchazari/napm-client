import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {
  RiMenuLine as MenuIcon,
  RiDashboardFill as DashboardIcon,
  RiPieChartFill as ChartIcon,
  RiNotification3Fill as BellIcon,
  RiSettings3Fill as SettingsIcon,
  RiLogoutBoxRFill as LogoutIcon
} from 'react-icons/ri';
import { ReactComponent as Logo } from '../napm-logo-light.svg';
import ReactTooltip from 'react-tooltip';
import './Sidebar.css';

function Sidebar({isExpanded, setIsExpanded}) {
  let { url } = useRouteMatch();

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebarHeader">
        <MenuIcon onClick={handleToggler} className="navIcon" />
        <Logo className="logo" />
      </div>
      <div className="sidebarNavLinkItems">
        <NavLink to={`${url}`} data-tip="Home" className="navItem" activeClassName="navItemActive" exact>
          <DashboardIcon className="navIcon" />
          <span className="navText">Home</span>
        </NavLink>
        <NavLink to={`${url}/insights`} data-tip="Insights" className="navItem" activeClassName="navItemActive">
          <ChartIcon className="navIcon" />
          <span className="navText">Insights</span>
        </NavLink>
        <NavLink to={`${url}/inbox`} data-tip="Inbox" className="navItem" activeClassName="navItemActive">
          <BellIcon className="navIcon" />
          <span className="navText">Inbox</span>
        </NavLink>
      </div>
      <div className="sidebarControls">
        <NavLink to={`${url}/settings`} data-tip="Settings" className="navItem" activeClassName="navItemActive">
          <SettingsIcon className="navIcon" />
          <span className="navText">Settings</span>
        </NavLink>
        <div data-tip="Log out" className="navItem">
          <LogoutIcon className="navIcon" />
          <span className="navText">Log out</span>
        </div>
      </div>
      {!isExpanded && <ReactTooltip effect="solid" className="sidebar-tooltips" place="right" />}
    </div>
  );
}

export default Sidebar;