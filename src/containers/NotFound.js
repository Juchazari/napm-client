import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../napm-logo.svg';
import './NotFound.css';

function NotFound() {
  return (
    <div className="NotFound">
      <Link to="/" style={{marginBottom: '16px'}}>
        <Logo style={{width: '150px'}} />
      </Link>
      <h1 style={{fontWeight: '400'}}>Sorry, that page doesn't exist!</h1>
    </div>
  );
}

export default NotFound;