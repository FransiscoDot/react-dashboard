import * as types from "../actions/actionTypes";
import { data } from "../api/mockProfitApi";
import initialState from "./initialState";

export default function profitData(state = initialState.profit, action) {
    switch(action.type) {
        case types.GET_PROFIT_FROM_COIN:
            return Object.assign({}, data.filter(c => {
                if (c.coin === action.coin)
                    return c;
            }));
        default:
            return state;
    }
}