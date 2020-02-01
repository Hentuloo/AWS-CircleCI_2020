import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import theme from 'themes/mainTheme';

export const withTheme = (ui, { customTheme } = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={customTheme || theme}>
      <GlobalStyles />
      <div>{children}</div>
    </ThemeProvider>
  );
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return {
    ...render(ui, { wrapper: Wrapper }),
  };
};
