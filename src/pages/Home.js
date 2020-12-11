import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Home;