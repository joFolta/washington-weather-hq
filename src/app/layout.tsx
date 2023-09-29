"use client"

import * as React from 'react';
// import type { Metadata } from 'next'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Dashboard from '../components/Dashboard'

// Issues on deployment with this export since we are using "use client" in this file
// https://stackoverflow.com/a/76878164
// export const metadata: Metadata = {
//   title: 'Washington Weather HQ',
//   description: 'Mt Washington weather web app built with NextJS, Typescript',
// };

export const DarkModeContext = React.createContext(false);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en">
      <head>
        <title>Washington Weather HQ</title>
        <meta name='description' content='Mt Washington weather web app built with NextJS, Typescript' />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
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
