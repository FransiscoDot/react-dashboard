// Set up your root reducer here...
import { combineReducers } from 'redux';
import profitData from "./profitReducers";

const profitReducer = combineReducers({
    profitData
});

export default profitReducer;
