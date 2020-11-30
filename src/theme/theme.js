import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c2e33',
    },
    secondary: {
      main: '#2196f3'
    }
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;