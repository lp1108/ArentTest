import { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
// asset
import { useMealRecord } from '../../../context/meal-record-context';

// css
import '../../../css/fontFamily.css';
import './mealHistory.css'
const MealHistory = () => {
    const { meal, mealFilter, setMeal } = useMealRecord();
    return (
        <Box
            mx={20}
            sx={{
                display: 'flex',
                alignSelf: "center"
            }}
        >
            <Grid container>
                {mealFilter?.map((item, index) => (
                    <Grid item xs={3}>
                        <div id="relative-div">
                            <img src={item.img} alt={index}  />
                            <div className='inter' id="label-text">{item.notedLabelText}</div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MealHistory;
