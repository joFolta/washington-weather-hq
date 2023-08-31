"use client"

import * as React from 'react';
import { DarkModeContext } from '../app/layout';

export default function HomeWeather() {
  const isDarkMode = React.useContext(DarkModeContext);

  return (
    <iframe
      src="https://www.mountwashington.org/experience-the-weather/mount-washington-weather.aspx#innerContent"
      style={{ filter: isDarkMode ? "invert(1)" : "none" }}
      height="1000px"
      loading="lazy">
    </iframe>
  );
}
