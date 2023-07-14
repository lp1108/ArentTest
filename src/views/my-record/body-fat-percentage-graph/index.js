// project imports
import { Card, CardMedia, Grid } from "@mui/material";
// asset
import bodyFatGraph from "../../../assets/images/bodyFatGraph.svg"
const BodyFatGraph = () => {
    return (
        <Grid container mt={8} mb={8}>
            <Grid item xs={12}>
                <div style={{
                    backgroundColor: "#2E2E2E",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Card sx={{ bgcolor: "#2E2E2E", width: "100%" }}>
                        <CardMedia
                            component="img"
                            alt="Body weight - Body fat percentage graph"
                            image={bodyFatGraph}
                        />
                    </Card>
                </div>
            </Grid>
        </Grid>
    );
}


export default BodyFatGraph;
