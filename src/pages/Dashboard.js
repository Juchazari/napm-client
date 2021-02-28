import React from 'react';
import styled from 'styled-components';
import DashboardRoutes from '../routes/DashboardRoutes';
import Sidebar from '../components/Sidebar';

const DashboardPage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const Main = styled(DashboardPage)`
  left: 56px;
`;

function Dashboard() {
  return (
    <DashboardPage>
      <Sidebar />
      <Main>
        <DashboardRoutes />
      </Main>
    </DashboardPage>
  );
}

export default Dashboard;