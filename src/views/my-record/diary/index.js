import { Grid } from "@mui/material";
import { useDiaryRecord } from "../../../context/diary-record-context";

const items = [
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
]
const Diary = () => {
    const {diaryRecord} = useDiaryRecord();
    return (
        <Grid container mt={8} mb={8}>
            <Grid item xs={12}>
                <p style={{ fontSize: "x-large" }}>MY DIARY</p>
            </Grid>
            {
                diaryRecord.map((item) => {
                    const contentArray = item.content.split(".");
                    return <Grid item xs={3}>
                        <div style={{ border: '2px solid #707070', margin: 5, padding: 25, minHeight: "340px" }}>
                            <p style={{ fontSize: "x-large", width: "min-content", marginTop: 0 }} >{item.dateTime}</p>
                            <p style={{ textAlign: "." }}>{contentArray[0] + "."} <br /> {contentArray[1]} </p>
                        </div>
                    </Grid>
                })
            }
        </Grid>

    );
}


export default Diary;
