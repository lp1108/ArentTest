import { Divider, Grid } from "@mui/material";
// project imports
// asset
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
                    <div style={{ textAlign: "center", backgroundColor: "#2E2E2E", maxWidth: "380px", padding: "50px" }}>
                        <p style={{ fontSize: "x-large", marginBottom: 0, color: "#FFCC21" }} >{item.title}</p>
                        <span style={{ fontSize: "x-large", marginBottom: 0, color: "#FFCC21" }}>{item.subTitle}</span>
                        <Divider variant="middle" style={{ backgroundColor: "white", width: "71px", margin: "8px 0 8px 103px" }} />
                        <span style={{ color: "white" }}>{item.content}</span>
                    </div>
                </Grid>
            ))}
        </Grid>

    );
}


export default Recommended;
