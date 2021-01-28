import React from 'react';
import LandingRoutes from './routes/LandingRoutes';
import Dashboard from './pages/Dashboard';

function App() {
  const isAuthenticated = false;

  return isAuthenticated ? <Dashboard /> : <LandingRoutes />;
}

export default App;