import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { DashboardRoutes as Routes } from '../Routes';

const ContentContainer = styled.div`
  padding-left: ${props => props.isExpanded ? "200px" : "52px"};
  transition: padding-left 0.2s;
`;

function Dashboard() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  return (
    <div className="Dashboard">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <ContentContainer isExpanded={isExpanded}>
        <Routes />
      </ContentContainer>
    </div>
  );
}

export default Dashboard;