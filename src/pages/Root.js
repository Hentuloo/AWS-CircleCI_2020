import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import theme from 'themes/mainTheme';
import ClientsPage from './ClientsPage/ClientsPage';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ClientsPage />
    </ThemeProvider>
  );
}

export default Root;
