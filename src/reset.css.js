import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    appearance: none;
    text-decoration: none;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #252525;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior: none;
  }

  a {
    color: inherit;
  }
`;