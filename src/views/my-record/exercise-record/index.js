import CircleIcon from '@mui/icons-material/Circle';
import { Grid } from "@mui/material";
// project imports
// css
import "./myRecord.css";
import "../../../css/fontFamily.css";
const rows = [
    {
        exercise: "家事全般（立位・軽い）",
        kcal: "26kcal",
        time: "10 min"
    },
    {
        exercise: "家事全般（立位・軽い）",
        kcal: "26kcal",
        time: "10 min"
    },
    {
        exercise: "家事全般（立位・軽い）",
        kcal: "26kcal",
        time: "10 min"
    },
    {
        exercise: "家事全般（立位・軽い）",
        kcal: "26kcal",
        time: "10 min"
    },
    {
        exercise: "家事全般（立位・軽い）",
        kcal: "26kcal",
        time: "10 min"
    },
]
const column = [{ index: 0 }, { index: 1 }];
const MyExerciseRecord = () => {
    return (
        <Grid container mt={8} mb={8}>
            <div id='black-div'>
                <Grid item xs={12}>
                    <div className='flex'>
                        <p className="inter" id="title" >MY EXERCISE</p>
                        <p className="inter" id="date">2021.05.21</p>
                    </div>
                </Grid>
                <div
                    className='scrollbar'
                    id="customer-scrollbar"
                >
                    <div className="force-overflow">
                        {column.map((item) => (
                            <Grid item xs={6} mr={8} pb={8}>
                                {rows.map((rowData) => (
                                    <div className='flex-space-between'>
                                        <div>
                                            <div className='flex align-self-end'>
                                                <CircleIcon id="circle-icon" />
                                                <p className="noto-sans-jp" id="exercise">{rowData.exercise}</p>
                                            </div>
                                            <span className="inter" id="kcal">{rowData.kcal}</span>
                                        </div>
                                        <div>
                                            <p className="inter" id="time">{rowData.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </Grid>
                        ))}
                    </div>
                </div>
            </div>
        </Grid>

    );
}


export default MyExerciseRecord;
