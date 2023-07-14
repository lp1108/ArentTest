import { combineReducers } from 'redux';
import customizationReducer from '../manager/customizationReducer';
const allReducers = combineReducers({
    customization: customizationReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "CLEAR_STORE") {
        state = undefined;
    }
    return allReducers(state, action)
}

export default rootReducer;