import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../napm-logo-light.svg';
import { RiMenuLine, RiSettings3Fill, RiLogoutBoxRFill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { IoMdStats } from 'react-icons/io';
import { HiBell } from 'react-icons/hi';
import './Sidebar.css';

function Sidebar() {
  const [cookies, setCookie, removeCookie] = useCookies(['sidebar-collapsed']);
  const [isExpanded, setIsExpanded] = useState(cookies['sidebar-collapsed'] ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setCookie('sidebar-collapsed', true, { path: '/' });
      return;
    }
    setIsExpanded(true);
    removeCookie('sidebar-collapsed', { path: '/' });
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar sidebar-collapsed"}>
      <div className="sidebar-header">
        <RiMenuLine 
          onClick={handleToggler}
          className="sidebar-icon"
        />
        <Logo className="logo item-text" />
      </div>
      <div className="sidebar-items">
        <NavLink to="/dashboard" className="item" activeClassName="dash-active" exact>
          <MdDashboard className="sidebar-icon" />
          <span className="item-text">Home</span>
        </NavLink>
        <NavLink to="/dashboard/insights" className="item" activeClassName="dash-active">
          <IoMdStats className="sidebar-icon" />
          <span className="item-text">Insights</span>
        </NavLink>
        <NavLink to="/dashboard/inbox" className="item" activeClassName="dash-active">
          <HiBell className="sidebar-icon" />
          <span className="item-text">Inbox</span>
        </NavLink>
      </div>
      <div className="dashboard-controls sidebar-items">
        <NavLink to="/dashboard/settings" className="item" activeClassName="dash-active">
          <RiSettings3Fill className="sidebar-icon" />
          <span className="item-text">Settings</span>
        </NavLink>
        <div className="item logout">
          <RiLogoutBoxRFill className="sidebar-icon" />
          <span className="item-text">Log out</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;