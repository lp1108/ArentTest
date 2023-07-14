import { Box, Button, Grid } from "@mui/material";
// project imports
import EntryScreen from "./button-move-entry-screen";
import BodyFatGraph from "./body-fat-percentage-graph";
import MyExerciseRecord from './exercise-record';
import Diary from "./diary";
import CustomButton from "../../ui-component/CustomButton";
// asset
import bodyFatGraph from "../../assets/images/bodyFatGraph.svg"
import { useDiaryRecord } from "../../context/diary-record-context";


const MyRecord = () => {
    const { getMoreDiaryRecord } = useDiaryRecord();
    return (
        <>
            <Box sx={{ flexGrow: 1 }} mx={20}>
                <EntryScreen />
                <BodyFatGraph />
                <MyExerciseRecord />
                <Diary />
            </Box>
            <CustomButton text={'自分の日記をもっと見る'} handleClick={getMoreDiaryRecord} />
        </>
    );
}


export default MyRecord;
