import { Box, Button, Grid } from "@mui/material";

// project imports
import Recommended from "./recommended";
import ColumnArticle from "./articles";
import { useColumnRecord } from "../../context/column-record-context";
const MyRecord = () => {
    const {getMoreColumnRecord} = useColumnRecord();
    return (
        <>
            <Box sx={{ flexGrow: 1 }} mx={20}>
                <Recommended />
                <ColumnArticle/>
            </Box>
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <Button variant="outlined" style={{
                        width: "70%",
                        height: "50px",
                        backgroundImage: "linear-gradient(#FF963C, #FFCC21)",
                        color: "white",
                        marginTop: "20px",
                        marginBottom: "60px"
                    }} onClick={() => getMoreColumnRecord()}>自分の日記をもっと見る</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </>

    );
}


export default MyRecord;
