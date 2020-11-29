import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196f3',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;