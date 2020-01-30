import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import theme from 'themes/mainTheme';
import App from './App';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <App />
      </div>
    </ThemeProvider>
  );
}

export default Root;
