import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { DashboardRoutes as Routes } from '../Routes';

const Content = styled.div`
  padding-left: ${props => (props.isExpanded ? "200px" : "52px")};
`;

function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const sidebarState = localStorage.getItem('sidebarState');
    if (sidebarState) setIsExpanded(JSON.parse(sidebarState));
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarState', JSON.stringify(isExpanded));
  }, [isExpanded]);

  return (
    <Fragment>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <Content isExpanded={isExpanded}>
        <Routes />
      </Content>
    </Fragment>
  );
}

export default Dashboard;