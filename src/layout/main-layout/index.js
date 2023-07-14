import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar, Box, CssBaseline, Toolbar, useMediaQuery,
    IconButton,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// project imports
import Header from './header';
import { SET_MENU } from '../../state/manager/action-type';
import Footer from './footer';
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: "#414141"
                }}
            >
                <Toolbar>
                    <Header />
                    
                </Toolbar>
            </AppBar>
            {/* Sidebar */}
            


            {/* main content */}
            <Box component="main" width={"100%"} style={{ position: "relative" }}>
                <Toolbar />
                <Outlet />
                {/* footer */}
                <div style={{ backgroundColor: "#414141" }}>
                    <Footer />
                </div>
                <IconButton aria-label="ArrowUpIcon" style={{ position: "absolute", right: "3%", top: "60%", width: "60px", height: "60px", border: "1px solid grey" }} onClick={() => scrollToTop()} >
                    <KeyboardArrowUpIcon />
                </IconButton>

            </Box>
            {/* <Main theme={theme} open={leftDrawerOpened} >

            </Main> */}

        </Box>
    );
};

export default MainLayout;
