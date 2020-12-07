import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuLine, RiSettings3Fill, RiLogoutBoxRFill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { IoMdStats } from 'react-icons/io';
import { HiBell } from 'react-icons/hi';
import { ReactComponent as Logo } from '../napm-logo-light.svg';
import './Sidebar.css';

function Sidebar({isExpanded, setIsExpanded}) {

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