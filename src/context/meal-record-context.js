import { useState, useContext, createContext, useEffect } from "react";
// asset
import m01 from '../assets/images/m01.jpg';
import l03 from '../assets/images/l03.jpg';
import d01 from '../assets/images/d01.jpg';
import l01 from '../assets/images/l01.jpg';
import l02 from '../assets/images/l02.jpg';
import d02 from '../assets/images/d02.jpg';
import s01 from '../assets/images/s01.jpg';
const MealRecordContext = createContext();
const mealData = [
    {
        img: m01,
        notedLabelText: "05.21.Morning",
        mealTime: "Morning"
    },
    {
        img: l03,
        notedLabelText: "05.21.Lunch",
        mealTime: "Lunch"

    },
    {
        img: d01,
        notedLabelText: "05.21.Dinner",
        mealTime: "Dinner"
    },
    {
        img: l01,
        notedLabelText: "05.21.Snack",
        mealTime: "Snack"
    },
    {
        img: m01,
        notedLabelText: "05.20.Morning",
        mealTime: "Morning"
    },
    {
        img: l02,
        notedLabelText: "05.20.Lunch",
        mealTime: "Lunch"
    },
    {
        img: d02,
        notedLabelText: "05.20.Dinner",
        mealTime: "Dinner"
    },
    {
        img: s01,
        notedLabelText: "05.21.Snack",
        mealTime: "Snack"
    },
];
const mealDataAdded = [{
    img: m01,
    notedLabelText: "05.21.Morning",
    mealTime: "Morning"
},
{
    img: l03,
    notedLabelText: "05.21.Lunch",
    mealTime: "Lunch"

},
{
    img: d01,
    notedLabelText: "05.21.Dinner",
    mealTime: "Dinner"
},
{
    img: l01,
    notedLabelText: "05.21.Snack",
    mealTime: "Snack"
}]
export const MealRecordProvider = ({ children }) => {
    const [meal, setMeal] = useState(mealData);
    const [mealTime, setMealTime] = useState("");
    const [mealFilter, setMealFilter] = useState(mealData);

    const filterMeal = (mealTime) => {
        if (!mealTime || mealTime === "") {
            return;
        }
        const result = meal.filter((m) => m.mealTime === mealTime);
        console.log(result);
        setMealFilter(result);
        setMealTime(mealTime);
    }

    const getMoreRecord = () => {
        let result = [...meal];
        if (!mealTime || mealTime === "") {
            result = meal.concat(mealDataAdded);
            setMeal(result);
            setMealFilter(result);
        } else {
            const mealFilted = mealDataAdded.filter((meal) => meal.mealTime === mealTime)[0];
            result = [...result, mealFilted]
            setMeal(result);

        }
    }

    useEffect(() => {
        filterMeal(mealTime);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meal])

    const value = { meal, mealFilter, filterMeal, setMeal, getMoreRecord }
    return <MealRecordContext.Provider value={value}>{children}</MealRecordContext.Provider>
}

export const useMealRecord = () => {
    const context = useContext(MealRecordContext);
    if (typeof context === "undefined") throw new Error("useAuth must be used within a MealRecordProvider");
    return context;
}
