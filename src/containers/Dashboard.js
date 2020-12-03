import React from 'react';
import Sidebar from '../components/Sidebar';
import { DashboardRoutes } from '../Routes';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Sidebar />
      <div className="dashboard-content-container">
        <DashboardRoutes />
      </div>
    </div>
  );
}

export default Dashboard;