import { Box, IconButton } from '@mui/material';
// project imports
import btnTransitMorning from '../../../assets/images/btnTransitMorning.svg';
import btnTransitLunch from '../../../assets/images/btnTransitLunch.svg';
import btnTransitDinner from '../../../assets/images/btnTransitDinner.svg';
import btnTransitSnack from '../../../assets/images/btnTransitSnack.svg';
// context
import { useMealRecord } from '../../../context/meal-record-context';
const ButtonTransits = () => {
    const { filterMeal } = useMealRecord();

    return (
            <Box
                mx={30}
                sx={{
                    display: 'flex',
                    alignSelf: "center",
                    justifyContent: 'space-around',
                    mt: 2,
                    mb: 2
                }}
            >
                <IconButton aria-label="Morning" onClick={() => filterMeal("Morning")}>
                    <img src={btnTransitMorning} alt="btnTransitMorning" width={"150px"} />
                </IconButton>
                <IconButton aria-label="Lunch" onClick={() => filterMeal("Lunch")}>
                    <img src={btnTransitLunch} alt="btnTransitLunch" width={"150px"} />
                </IconButton>
                <IconButton aria-label="Dinner" onClick={() => filterMeal("Dinner")}>
                    <img src={btnTransitDinner} alt="btnTransitDinner" width={"150px"} />
                </IconButton>
                <IconButton aria-label="Snack" onClick={() => filterMeal("Snack")}>
                    <img src={btnTransitSnack} alt="btnTransitSnack" width={"150px"} />
                </IconButton>
            </Box>
    );
}


export default ButtonTransits;
