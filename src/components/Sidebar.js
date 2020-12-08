import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {
  RiMenuLine,
  RiDashboardFill,
  RiSettings3Fill,
  RiLogoutBoxRFill,
  RiPieChartFill,
  RiNotification3Fill
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
      <div className="sidebar-header">
        <RiMenuLine onClick={handleToggler} className="sidebar-icon" />
        <Logo className="logo item-text" />
      </div>
      <div className="sidebar-items">
        <NavLink to={`${url}`} data-tip="Home" className="item" activeClassName="dash-active" exact>
          <RiDashboardFill className="sidebar-icon" />
          <span className="item-text">Home</span>
        </NavLink>
        <NavLink to={`${url}/insights`} data-tip="Insights" className="item" activeClassName="dash-active">
          <RiPieChartFill className="sidebar-icon" />
          <span className="item-text">Insights</span>
        </NavLink>
        <NavLink to={`${url}/inbox`} data-tip="Inbox" className="item" activeClassName="dash-active">
          <RiNotification3Fill className="sidebar-icon" />
          <span className="item-text">Inbox</span>
        </NavLink>
      </div>
      <div className="sidebar-controls sidebar-items">
        <NavLink to={`${url}/settings`} data-tip="Settings" className="item" activeClassName="dash-active">
          <RiSettings3Fill className="sidebar-icon" />
          <span className="item-text">Settings</span>
        </NavLink>
        <div data-tip="Log out" className="item logout">
          <RiLogoutBoxRFill className="sidebar-icon" />
          <span className="item-text">Log out</span>
        </div>
      </div>
      {!isExpanded ? <ReactTooltip effect="solid" className="sidebar-tooltips" place="right" /> : null}
    </div>
  );
}

export default Sidebar;