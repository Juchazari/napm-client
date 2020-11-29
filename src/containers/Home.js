import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Home.css';

function HomeNavbar() {
  return (
    <nav className="Home-Navbar">
      <h1 className="logo">TBD LOGO</h1>
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