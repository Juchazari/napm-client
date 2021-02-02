import React, { Fragment } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import DashboardRoutes from '../routes/DashboardRoutes';

const Main = styled.div`
  margin-left: 68px;
`;

function Dashboard() {
  return (
    <Fragment>
      <Sidebar />
      <Main>
        <DashboardRoutes />
      </Main>
    </Fragment>
  );
}

export default Dashboard;