import CircleIcon from '@mui/icons-material/Circle';
import { Grid } from "@mui/material";
// project imports

import "./myRecord.css"
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
            <div style={{
                backgroundColor: "#2E2E2E",
                width: "100%",
                color: "white",
                paddingRight: "25px"
            }}>
                <Grid item xs={12}>
                    <div style={{ display: "flex", }}>
                        <p style={{ marginLeft: "40px", marginRight: "45px", fontSize: "x-large", width: "min-content" }} >MY EXERCISE</p>
                        <p style={{ fontFamily: "Inter", fontSize: "xx-large" }}>2021.05.21</p>
                    </div>
                </Grid>
                <div
                    className='scrollbar'
                    id="customer-scrollbar"
                >
                    <div style={{ display: "flex", marginLeft: "40px" }} className="force-overflow">
                        {column.map((item) => (
                            <Grid item xs={6} mr={8} pb={8}>
                                {rows.map((rowData) => (
                                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #777777" }}>
                                        <div>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <CircleIcon style={{ width: "10px", marginRight: "20px" }} />
                                                <p style={{ marginBottom: 0 }}>{rowData.exercise}</p>
                                            </div>
                                            <span style={{ marginLeft: "30px", color: "#FFCC21" }}>{rowData.kcal}</span>
                                        </div>
                                        <div>
                                            <p style={{ marginLeft: "30px", color: "#FFCC21" }}>{rowData.time}</p>
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
