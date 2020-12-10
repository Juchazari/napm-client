import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import './Home.css';

function HomeNavbar() {
  return (
    <nav className="Home-Navbar">
      <Logo style={{width: "100px"}} />
    </nav>
  );
}

function Home() {
  return (
    <div className="Home">
      <HomeNavbar />
    </div>
  );
}

export default Home;