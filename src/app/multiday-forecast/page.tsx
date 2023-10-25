"use client"

import * as React from 'react';
import { DarkModeContext } from '../layout';

export default function MultidayForecast() {
  const isDarkMode = React.useContext(DarkModeContext);

  return (
    <iframe
      src="https://mountwashington.org/weather/higher-summits-forecast#content"
      style={{ filter: isDarkMode ? "invert(1)" : "none" }}
      height="1000px"
      loading="lazy"
    />
  );
}
