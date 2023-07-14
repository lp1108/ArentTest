import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid } from '@mui/material';
import LogoSection from '../logo-section';
// asset
import myProfileIcon from '../../../assets/icon/myProfileIcon.svg';
import challengeIcon from '../../../assets/icon/challengeIcon.svg';
import noteIcon from '../../../assets/icon/noteIcon.svg';
import hamburgerIcon from '../../../assets/icon/hamburgerIcon.svg';

// project imports
import SideBar from '../sidebar';
// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <>
            <Box
                mx={20}
                sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    alignSelf: "center",
                    width: "100%"
                }}
            >
                <LogoSection id="Logo" size="120px" />
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between",
                    alignSelf: "center",
                }}>
                    <div>
                        <Button variant="text" style={{ marginRight: 40 }} onClick={() => navigate("/myRecord")}>
                            <img src={myProfileIcon} alt="icon" width={"30px"} style={{ marginRight: "8px" }} />
                            <p style={{ fontSize: "14px", color: "white" }}>自分の記録</p>
                        </Button>

                        <Button variant="text" style={{ marginRight: 40 }}>
                            <img src={challengeIcon} alt="icon" width={"30px"} style={{ marginRight: "8px" }} />
                            <p style={{ fontSize: "14px", color: "white" }}>チャレンジ</p>
                        </Button>

                        <Button variant="text" style={{ position: "relative", marginRight: 40 }}>
                            <img src={noteIcon} alt="icon" width={"30px"} style={{ marginRight: "8px" }} />
                            <p style={{ fontSize: "14px", color: "white" }}>お知らせ</p>
                            <div style={{
                                borderRadius: "50%",
                                backgroundColor: "#EA6C00",
                                fontSize: "10px",
                                color: "white",
                                width: "18px",
                                position: "absolute",
                                left: "28px",
                                top: "15px"
                            }}>1</div>
                        </Button>
                    </div>
                    <SideBar/>
                    {/* <Button variant="text">
                        <img src={hamburgerIcon} alt="icon" width={"30px"} style={{ marginRight: "8px" }} />
                    </Button> */}
                </div>
            </Box>
        </>
    );
};

export default Header;
