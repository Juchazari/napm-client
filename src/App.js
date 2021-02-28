import React from 'react';
import WelcomeRoutes from './routes/WelcomeRoutes';
import Dashboard from './pages/Dashboard';

function App() {
  const isAuthenticated = true;

  return isAuthenticated ? <Dashboard /> : <WelcomeRoutes />;
}

export default App;