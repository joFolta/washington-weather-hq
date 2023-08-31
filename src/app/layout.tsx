"use client"

import * as React from 'react';
import type { Metadata } from 'next'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Dashboard from '../components/mui-template/Dashboard'

export const metadata: Metadata = {
  title: 'Washington Weather HQ',
  description: 'Mt Washington weather web app built with NextJS, Typescript',
};

export const DarkModeContext = React.createContext(false);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en">
      <body>
        <DarkModeContext.Provider value={isDarkMode}>
          <ThemeRegistry isDarkMode={isDarkMode}>
            <Dashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>{children}</Dashboard>
          </ThemeRegistry>
        </DarkModeContext.Provider>
      </body>
    </html>
  );
}
