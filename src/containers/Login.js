import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../components/InputGroup';
import Button from '@material-ui/core/Button';
import OAuthButton from '../components/OAuthButton';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div className="Login">
      <Link className="login-logo" to="/">TBD LOGO</Link>
      <div className="login-content">
        <h1 className="entry-header">Log in to Napm</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup
            label="Email Address"
            type="text"
            id="login-email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup
            label="Password"
            type="password"
            id="login-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disableElevation>
            Log in
          </Button>
        </form>
        <span className="entry-divider">OR</span>
        <div className="OAuth-buttons">
          <OAuthButton provider="Google" />
          <OAuthButton provider="Apple" />
        </div>
        <div className="link-to-signup">
          <span>Don't have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;