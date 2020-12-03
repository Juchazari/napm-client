import React, { useState } from 'react';
import { ReactComponent as Logo } from '../napm-logo-light.svg';
import { RiMenuLine, RiSettings3Fill, RiLogoutBoxRFill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { IoMdStats } from 'react-icons/io';
import { HiBell } from 'react-icons/hi';
import './Sidebar.css';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggler = () => {
    setIsExpanded(!isExpanded);
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
        <a href="#home" className="item">
          <MdDashboard className="sidebar-icon" />
          <span className="item-text">Home</span>
        </a>
        <a href="#Insights" className="item">
          <IoMdStats className="sidebar-icon" />
          <span className="item-text">Insights</span>
        </a>
        <a href="#inbox" className="item">
          <HiBell className="sidebar-icon" />
          <span className="item-text">Inbox</span>
        </a>
      </div>
      <div className="dashboard-controls sidebar-items">
        <a href="#settings" className="item">
          <RiSettings3Fill className="sidebar-icon" />
          <span className="item-text">Settings</span>
        </a>
        <div className="item logout">
          <RiLogoutBoxRFill className="sidebar-icon" />
          <span className="item-text">Log out</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;