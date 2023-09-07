"use client"

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, SecondaryListItems } from './listItems';
import AppBar from './AppBar';
import Drawer from './Drawer';
import ForecastCountdown from './ForecastCountdown';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Washington Weather HQ
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 240;

export default function Dashboard({ isDarkMode, toggleDarkMode, children }: { isDarkMode: boolean, toggleDarkMode: () => void, children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} drawerWidth={drawerWidth}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed,
                        pl: '22px'
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Washington Weather HQ
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <ForecastCountdown />
                </Toolbar>
                <Divider />
                <List component="nav">
                    {mainListItems}
                    <Divider sx={{ my: 2 }} />
                    <SecondaryListItems isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ m: 0, p: 0 }}>
                    <Paper
                        sx={{
                            p: 0,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Page Content Goes Here*/}
                        {children}
                    </Paper>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box >
    );
}