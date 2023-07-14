import { Box, Grid } from '@mui/material';
// asset
import { useMealRecord } from '../../../context/meal-record-context';
import { useEffect, useState } from 'react';
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
                        <div style={{ position: "relative" }}>
                            <img src={item.img} alt={index} width="380px" height="350px" />
                            <div style={{
                                backgroundColor: "#FFCC21",
                                width: "150px",
                                height: "40px",
                                color: "white",
                                textAlign: "center",
                                paddingTop: "8px",
                                position: "absolute",
                                bottom: "7px"
                            }}>{item.notedLabelText}</div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


export default MealHistory;
