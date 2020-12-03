import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../napm-logo.svg';
import InputGroup from '../components/InputGroup';
import Button from '@material-ui/core/Button';
import OAuthButton from '../components/OAuthButton';
import './LoginSignup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="Signup entry-page">
      <Link className="link-to-home" to="/">
        <Logo className="logo" />
      </Link>
      <div className="entry-card">
        <h1 className="entry-header">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup
            label="Full Name"
            type="text"
            id="signup-name"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <InputGroup
            label="Email Address"
            type="text"
            id="signup-email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup
            revealer
            setInputType={setInputType}
            label="Password"
            type={inputType}
            id="signup-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disableElevation>
            Sign up
          </Button>
        </form>
        <span className="entry-divider">OR</span>
        <div className="OAuth-buttons">
          <OAuthButton provider="Google" />
          <OAuthButton provider="Apple" />
        </div>
        <div className="link-to-login">
          <span>Already have an account?</span>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;