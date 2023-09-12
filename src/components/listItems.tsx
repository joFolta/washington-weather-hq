import * as React from 'react';
import Link from 'next/link';
import StormIcon from '@mui/icons-material/Storm';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HikingIcon from '@mui/icons-material/Hiking';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import OpenInBrowserSharpIcon from '@mui/icons-material/OpenInBrowserSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} href={'/'}>
            <ListItemIcon>
                <StormIcon />
            </ListItemIcon>
            <ListItemText primary="Daily Forecast" />
        </ListItemButton>
        <ListItemButton component={Link} href={'/higher-summits'}>
            <ListItemIcon>
                <LandscapeIcon />
            </ListItemIcon>
            <ListItemText primary="Multiday Cast" />
            {/* TODO: create sub-bullets */}
            {/* ------------ Higher Summit Forecast (2 day) */}
            {/* ------------ Link out to Mt-Forecast.com */}
            {/* ------------ Link out to https://www.google.com/search?q=sargents+purchase+weather */}
        </ListItemButton>
        <ListItemButton component={Link} href={'/live-videos'}>
            <ListItemIcon>
                <PlayCircleOutlineSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Live Feeds" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <HikingIcon />
            </ListItemIcon>
            <ListItemText primary="Intense Trails" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SevereColdIcon />
            </ListItemIcon>
            <ListItemText primary="Sagely Advice" />
        </ListItemButton>
    </React.Fragment>
);

export const SecondaryListItems = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
    return (
        <React.Fragment >
            <ListItem onClick={toggleDarkMode}>
                <ListItemIcon>
                    {isDarkMode ? <DarkModeSharpIcon /> : <WbSunnySharpIcon />}
                </ListItemIcon>
                <ListItemText id="switch-dark-mode" primary="Dark Mode" />
                <Switch
                    edge="end"
                    checked={isDarkMode}
                    inputProps={{
                        'aria-labelledby': 'switch-dark-mode',
                    }}
                />
            </ListItem>
            <ListItemButton component={Link} href={'https://www.mountwashington.org/experience-the-weather/mount-washington-weather.aspx'}>
                <ListItemIcon>
                    <OpenInBrowserSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Open Full Page" />
            </ListItemButton>
        </React.Fragment >
    )
};