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


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import AirIcon from '@mui/icons-material/Air';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export const MainListItems = ({ nestedListOpen, handleClickOpenNestedList, toggleDrawer }) => {
    const handleClick = () => {
        // if (nestedListOpen) {
        // toggleDrawer();
        handleClickOpenNestedList();
        // }

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
                {/* TODO: fix sub-bullet spacing when mobile screensize */}
            </ListItemButton>
            <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} href={'/multiday-forecast'}>
                        <ListItemIcon>
                            <LandscapeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Higher Summits" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} target="_blank"
                        variant="contained" component={Link} href={'https://www.mountain-forecast.com/peaks/Mount-Washington-2/forecasts/1917'}>
                        <ListItemIcon>
                            <TravelExploreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mtn-Forecast" />
                        <LaunchIcon fontSize='xsmall' />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} target="_blank"
                        variant="contained" component={Link} href={'https://www.google.com/search?q=sargents+purchase+weather#kp-wp-tab-overview'}>
                        <ListItemIcon>
                            <AirIcon />
                        </ListItemIcon>
                        <ListItemText primary="Weather.com" />
                        <LaunchIcon fontSize='xsmall' />
                    </ListItemButton>
                </List>
            </Collapse>
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
    )
};

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