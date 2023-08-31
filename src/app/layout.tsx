"use client"

import * as React from 'react';
import type { Metadata } from 'next'
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Dashboard from '../components/mui-template/Dashboard'

export const metadata: Metadata = {
  title: 'Washington Weather HQ',
  description: 'Mt Washington weather web app built with NextJS, Typescript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // TODO REMOVE LOG 
  console.log('isDarkMode', isDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en">
      <body>
        <ThemeRegistry isDarkMode={isDarkMode}>
          <Dashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>{children}</Dashboard>
        </ThemeRegistry>
      </body>
    </html>
  );
}
