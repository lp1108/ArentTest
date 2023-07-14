import { Grid } from "@mui/material";
// context
import { useDiaryRecord } from "../../../context/diary-record-context";

// css
import '../../../css/fontFamily.css';
import './diary.css'
const Diary = () => {
    const {diaryRecord} = useDiaryRecord();
    return (
        <Grid container mt={8} mb={8}>
            <Grid item xs={12}>
                <p className="inter" style={{ fontSize: "x-large" }}>MY DIARY</p>
            </Grid>
            {
                diaryRecord.map((item) => {
                    const contentArray = item.content.split(".");
                    return <Grid item xs={3}>
                        <div id="card-div">
                            <p className="inter" id="diary-date-time" >{item.dateTime}</p>
                            <p className="noto-sans-jp" >{contentArray[0] + "."} <br /> {contentArray[1]} </p>
                        </div>
                    </Grid>
                })
            }
        </Grid>
    );
}


export default Diary;
