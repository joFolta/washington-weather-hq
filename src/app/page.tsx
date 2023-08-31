"use client"

import * as React from 'react';
import { useSearchParams } from 'next/navigation'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';

export default function HomeWeather(props) {
  // TODO REMOVE LOG 
  console.log('props', props);
  const searchParams = useSearchParams();
  console.log(searchParams.get('isDarkMode')) // Logs "search"
  const isDarkMode = searchParams.get('isDarkMode');
  return (
    <iframe
      // id={styles.weatherStation}
      src="https://www.mountwashington.org/experience-the-weather/mount-washington-weather.aspx#innerContent"
      // width="80%"
      // dark mode
      // style={{ filter: "invert(1)" }}
      style={{ filter: isDarkMode ? "invert(1)" : "none" }}
      height="1000px"
      loading="lazy">
    </iframe>
  );
}
