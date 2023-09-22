import * as React from 'react';
import Link from 'next/link';
import StormIcon from '@mui/icons-material/Storm';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HikingIcon from '@mui/icons-material/Hiking';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirIcon from '@mui/icons-material/Air';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export const MainListItems = ({ nestedListOpen, handleClickOpenNestedList }: { nestedListOpen: boolean, handleClickOpenNestedList: () => void }) => {
    const handleClick = () => {
        handleClickOpenNestedList();
    }

    return (
        <React.Fragment>
            <ListItemButton component={Link} href={'/'}>
                <ListItemIcon>
                    <StormIcon />
                </ListItemIcon>
                <ListItemText primary="Daily Forecast" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Multiday Cast" />
                {nestedListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }} component={Link} href={'/multiday-forecast'}>
                        <ListItemIcon>
                            <LandscapeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Higher Summits" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}
                        component={Link} href={'https://www.mountain-forecast.com/peaks/Mount-Washington-2/forecasts/1917'}>
                        <ListItemIcon>
                            <TravelExploreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mtn-Forecast" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}
                        component={Link} href={'https://www.google.com/search?q=sargents+purchase+weather#kp-wp-tab-overview'}>
                        <ListItemIcon>
                            <AirIcon />
                        </ListItemIcon>
                        <ListItemText primary="Weather.com" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton component={Link} href={'/live-videos'}>
                <ListItemIcon>
                    <PlayCircleOutlineSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Live Feeds" />
            </ListItemButton>
            <ListItemButton component={Link} href={'/hiking'}>
                <ListItemIcon>
                    <HikingIcon />
                </ListItemIcon>
                <ListItemText primary="Hiking" />
            </ListItemButton>
        </React.Fragment>
    )
};

export const SecondaryListItems = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
    return (
        <React.Fragment >
            <ListItemButton onClick={toggleDarkMode}>
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
            </ListItemButton>
        </React.Fragment >
    )
};