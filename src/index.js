import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('root')
);