import { Box, Button, Grid } from '@mui/material';
// project imports
import BodyFatPercentageGraph from './body-fat-percentage-graph';
import ButtonTransits from './button-transit-input';
import { MealRecordProvider, useMealRecord } from '../../context/meal-record-context';
// asset
import MealHistory from './meal-history';

const TopPage = () => {
    const {getMoreRecord} = useMealRecord();

    return (
        <div>

            <BodyFatPercentageGraph />
                <ButtonTransits />
                <MealHistory />
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <Button variant="outlined" style={{
                        width: "70%",
                        height: "50px",
                        backgroundImage: "linear-gradient(#FF963C, #FFCC21)",
                        color: "white",
                        marginTop: "20px",
                        marginBottom: "60px"
                    }} onClick={()=> getMoreRecord()}>記録をもっと見る</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </div>

    );
}


export default TopPage;
