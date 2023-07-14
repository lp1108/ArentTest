import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    AppBar, Box, CssBaseline, Toolbar, useMediaQuery, Grow,
    Alert,
    IconButton,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// project imports
import Header from './header';
import { drawerWidth } from '../../state/manager/constant';
import { SET_MENU } from '../../state/manager/action-type'
import { isEmpty } from '../../utils/validation-empty';
import Footer from './footer';
import SideBar from './sidebar';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const account = useSelector((state) => state.account);

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
    }, [matchDownMd]);

    // TODO
    // useEffect(() => {
    //     if (isEmpty(account)) {
    //         navigate('/login');
    //     }
    // }, [account]);
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
