import * as React from 'react';
import Link from 'next/link';
import StormIcon from '@mui/icons-material/Storm';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import OpenInBrowserSharpIcon from '@mui/icons-material/OpenInBrowserSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';

export const mainListItems = (
    <React.Fragment>
        {/* <ListItemButton component={Link} href={'/'}> */}
        {/* TODO REMOVE */}
        <ListItemButton component={Link} href={{
            pathname: '/',
            query: {
                isDarkMode: 'search???'
            }
        }}>
            <ListItemIcon>
                <StormIcon />
            </ListItemIcon>
            <ListItemText primary="Forecast" />
        </ListItemButton>
        <ListItemButton component={Link} href={'/live-videos'}>
            <ListItemIcon>
                <PlayCircleOutlineSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Live Video" />
        </ListItemButton>
        <ListItemButton component={Link} href={'/tasks'}>
            <ListItemIcon>
                😕
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
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