import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const useStyles = makeStyles({
  Button: {
    width: '100%',
    marginBottom: '8px',
    color: '#555555',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.12),0px 1px 1px 0px rgba(0,0,0,0.12),0px 1px 4px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#f7f7f7',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.12),0px 1px 1px 0px rgba(0,0,0,0.12),0px 1px 4px 0px rgba(0,0,0,0.12)'
    }
  }
});

function OAuthButton({provider}) {
  const classes = useStyles();

  const icon = () => {
    return provider === "Google" ? <FcGoogle /> : <FaApple />;
  }

  return (
    <Button className={classes.Button} variant="contained" startIcon={icon()}>
      Continue with {provider}
    </Button>
  );
}

export default OAuthButton;