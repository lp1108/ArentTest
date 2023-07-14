import { Divider, Grid } from "@mui/material";
// project imports
// css
import './recommended.css';
import '../../../css/fontFamily.css';
const recommendedItems = [
    {
        title: "RECOMMENDED",
        subTitle: "COLUMN",
        content: "オススメ"
    },
    {
        title: "RECOMMENDED",
        subTitle: "DIET",
        content: "ダイエット"
    },
    {
        title: "RECOMMENDED",
        subTitle: "BEAUTY",
        content: "美容"
    },
    {
        title: "RECOMMENDED",
        subTitle: "HEALTH",
        content: "健康"
    },
]
const Recommended = () => {
    return (
        <Grid container mt={8} mb={8}>
            {recommendedItems.map((item) => (
                <Grid item xs={3}>
                    <div id="recommended-card">
                        <p className="inter" id="recommended-title" >{item.title}</p>
                        <span className="inter" id="recommended-sub-title">{item.subTitle}</span>
                        <Divider variant="middle" id="divider" />
                        <span classname="noto-sans-jp" id="recommended-content">{item.content}</span>
                    </div>
                </Grid>
            ))}
        </Grid>

    );
}


export default Recommended;
