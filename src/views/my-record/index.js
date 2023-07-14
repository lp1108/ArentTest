import { Box, Button, Grid } from "@mui/material";
// project imports
import EntryScreen from "./button-move-entry-screen";
import BodyFatGraph from "./body-fat-percentage-graph";
import MyExerciseRecord from './exercise-record';
import Diary from "./diary";
// asset
import bodyFatGraph from "../../assets/images/bodyFatGraph.svg"
import { useDiaryRecord } from "../../context/diary-record-context";

const MyRecord = () => {
     const {getMoreDiaryRecord} = useDiaryRecord();
    return (
        <>
            <Box sx={{ flexGrow: 1 }} mx={20}>
                <EntryScreen />
                <BodyFatGraph />
                <MyExerciseRecord />
                <Diary />
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
                    }} onClick={() => getMoreDiaryRecord()}>自分の日記をもっと見る</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid></>

    );
}


export default MyRecord;
