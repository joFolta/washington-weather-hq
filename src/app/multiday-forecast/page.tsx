"use client"

import * as React from 'react';
import { DarkModeContext } from '../layout';

export default function MultidayForecast() {
  const isDarkMode = React.useContext(DarkModeContext);

  return (
    <iframe
      src="https://www.mountwashington.org/experience-the-weather/higher-summit-forecast.aspx#innerContent"
      style={{ filter: isDarkMode ? "invert(1)" : "none" }}
      height="1000px"
      loading="lazy"
    />
  );
}
