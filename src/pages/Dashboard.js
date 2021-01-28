import React, { Fragment } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import DashboardRoutes from '../routes/DashboardRoutes';

const PageContainer = styled.div`
  padding-left: 72px;
`;

function Dashboard() {
  return (
    <Fragment>
      <Sidebar />
      <PageContainer>
        <DashboardRoutes />
      </PageContainer>
    </Fragment>
  );
}

export default Dashboard;