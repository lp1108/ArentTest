import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import hamburgerIcon from '../../../assets/icon/hamburgerIcon.svg';
import { useNavigate } from 'react-router-dom';
const items = [
    {
        title: "自分の記録",
        url: "/myRecord"
    },
    {
        title: "体重グラフ",
        url: "/topPage"
    },
    {
        title: "目標",
        url: "/topPage"
    },
    {
        title: "選択中のコース",
        url: "/topPage"
    },
    {
        title: "コラム一覧",
        url: "/columnPage"
    },
    {
        title: "設定",
        url: "/topPage"
    },
]
export default function SwipeableTemporaryDrawer() {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, bgcolor: "#777777", height: "100%", color: "white" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {items.map((item, index) => (
                    <ListItem key={item.title} disablePadding style={{ padding: "10px", borderBottomStyle: "groove", borderColor: "grey" }}>
                        <ListItemButton onClick={() => navigate(item.url)}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Button variant="text" onClick={toggleDrawer('right', true)}  style={{marginTop: "10px"}}>
                    <img src={hamburgerIcon} alt="icon" width={"30px"} style={{ marginRight: "8px" }} />
                </Button>
                {/* <Button onClick={toggleDrawer('right', true)}>{'right'}</Button> */}
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {list('right')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
