import { CssBaseline, NoSsr, StylesProvider } from '@material-ui/core';
import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import TableContent from './app/components/TableContent/TableContent';
import createTheme from './theme';

const App: React.FC = () => {
  const theme = useMemo(() => createTheme(), []);
  return (
    <>
      <CssBaseline />
      <NoSsr>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <TableContent />
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </NoSsr>
    </>
  );
};

export default App;
