import { Box, Card, CardMedia, Grid } from '@mui/material';
// project imports
import MainCard from '../../../ui-component/MainCard';
import DateArchivement from '../date-archivement-rate';
// asset
import bodyWeightGraph from '../../../assets/images/bodyWeightGraph.svg';

const BodyFatPercentageGraph = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={5}>
                    <DateArchivement />
                </Grid>
                <Grid item xs={7}>
                    <div style={{
                        backgroundColor: "#2E2E2E", height: "350px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Card sx={{ bgcolor: "#2E2E2E", width: "700px" }}>
                            <CardMedia
                                component="img"
                                alt="Body weight - Body fat percentage graph"
                                image={bodyWeightGraph}
                            />
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}


export default BodyFatPercentageGraph;
