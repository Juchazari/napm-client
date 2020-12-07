import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { DashboardRoutes as Routes } from '../Routes';
import './Dashboard.css';

function Dashboard() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  return (
    <div className="Dashboard">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={isExpanded ? "content-container" : "content-container sidebar-collapsed"}>
        <Routes />
      </div>
    </div>
  );
}

export default Dashboard;