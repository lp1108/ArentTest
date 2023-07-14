import { Grid } from "@mui/material";
// project import
import { useColumnRecord } from "../../../context/column-record-context";
const ColumnArticle = () => {
    const {columnRecord} = useColumnRecord()
    return (
        <Grid container>
            {columnRecord.map((item, index) => (
                <Grid item xs={3} mb={4}>
                    <div style={{ position: "relative" }}>
                        <img src={item.img} alt={index} width="380px" height="330px" />
                        <div style={{
                            backgroundColor: "#FFCC21",
                            width: "170px",
                            height: "40px",
                            color: "white",
                            textAlign: "center",
                            paddingTop: "8px",
                            position: "absolute",
                            bottom: "95px"
                        }}>{item.notedLabelText}</div>
                        <div style={{ position: "relative" }}>
                            <p style={{ marginBottom: 0 }}>{item.title}</p>
                            <span style={{ color: "#FF963C" }}>{item.subTitle}</span>
                        </div>
                    </div>
                </Grid>
            ))}
        </Grid>

    );
}


export default ColumnArticle;
