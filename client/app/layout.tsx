'use client';

import type { ReactNode } from 'react';
import 'styles/globals.css';
import { staticPath } from 'utils/$path';
import styles from './layout.module.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// MUI のテーマを作成
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
          <div className={styles.container}>
            {children}
            <footer className={styles.footer}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <img src={staticPath.vercel_svg} alt="Vercel Logo" className={styles.logo} />
              </a>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
