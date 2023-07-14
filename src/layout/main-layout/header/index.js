import { useNavigate } from 'react-router-dom';
// material-ui
import { Box, Button } from '@mui/material';
// asset
import myProfileIcon from '../../../assets/icon/myProfileIcon.svg';
import challengeIcon from '../../../assets/icon/challengeIcon.svg';
import noteIcon from '../../../assets/icon/noteIcon.svg';
// project imports
import SideBar from '../sidebar';
import LogoSection from '../logo-section';
// Css
import '../../../css/fontFamily.css';
import './header.css';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //
const Header = () => {
    const navigate = useNavigate();
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
                <LogoSection size="120px" />
                <div className='space-between-center-div'>
                    <div>
                        <Button variant="text" className='mr-40' onClick={() => navigate("/myRecord")}>
                            <img src={myProfileIcon} alt="icon" />
                            <p className="noto-sans-jp">自分の記録</p>
                        </Button>

                        <Button variant="text" className='mr-40'>
                            <img src={challengeIcon} alt="icon" />
                            <p className="noto-sans-jp">チャレンジ</p>
                        </Button>

                        <Button variant="text" className='mr-40' id="note" >
                            <img src={noteIcon} alt="icon" />
                            <p className="noto-sans-jp">お知らせ</p>
                            <div className="inter" id="info-count">1</div>
                        </Button>
                    </div>
                    <SideBar />
                </div>
            </Box>
        </>
    );
};

export default Header;
