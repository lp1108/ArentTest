
// material-ui
import { Box } from '@mui/material';

// ==============================|| MAIN NAVBAR / Footer ||============================== //

const Footer = () => {
    return (
        <>
            <Box
                mx={20}
                sx={{
                    display: 'flex',
                    alignSelf: "center",
                    color: "white",
                    height: "100px",
                    pt: "30px"
                }}
            >
                <p>会員登録</p>
                <div style={{ width: "80px" }}></div>
                <p>運営会社</p>
                <div style={{ width: "80px" }}></div>
                <p>利用規約</p>
                <div style={{ width: "80px" }}></div>
                <p>個人情報の取扱について</p>
                <div style={{ width: "80px" }}></div>
                <p>特定商取引法に基づく表記</p>
                <div style={{ width: "80px" }}></div>
                <p>お問い合わせ</p>
            </Box>
        </>
    );
};

export default Footer;
