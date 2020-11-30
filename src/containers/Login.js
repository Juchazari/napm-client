import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../napm-logo.svg';
import InputGroup from '../components/InputGroup';
import Button from '@material-ui/core/Button';
import OAuthButton from '../components/OAuthButton';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMessage, displayErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(!/\S/.test(email)) {
    //   console.log("Email does not have some letters in it!")
    // }
  }

  return (
    <div className="Login">
      <Link className="link-to-home" to="/">
        <Logo className="logo" />
      </Link>
      <div className="entry-card">
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
        <div className="forgot-password">
          <Link to="#forgot-password">Forgot password?</Link>
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