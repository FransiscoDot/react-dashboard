import * as types from "./actionTypes";

export function getProfitFromCoin(coin) {
    return {
        type: types.GET_PROFIT_FROM_COIN,
        coin
    };
}