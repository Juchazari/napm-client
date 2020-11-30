import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../napm-logo.svg';
import Button from '@material-ui/core/Button';
import './Home.css';

function HomeNavbar() {
  return (
    <nav className="Home-Navbar">
      <Logo style={{width: "100px"}} />
      <div>
        <Button style={{marginRight: "8px"}} component={Link} to="/login">
          Log In
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/signup">
          Sign Up
        </Button>
      </div>
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