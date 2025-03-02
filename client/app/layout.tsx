'use client';

import type { ReactNode } from 'react';
import 'styles/globals.css';
import { staticPath } from 'utils/$path';
import styles from './layout.module.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>project-management</title>
        <link rel="icon" href={staticPath.favicon_png} />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={styles.container}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
