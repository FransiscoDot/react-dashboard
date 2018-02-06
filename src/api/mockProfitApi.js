import delay from "./delay";

export const data = [
    {
        "coin": "BTC",
        "value": 4.589
    },
    {
        "coin": "ETH",
        "value": 7.894
    },
    {
        "coin": "USD",
        "value": 2980
    }
];

export class ProfitApi {
    static getProfitFromCoin(coin) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                coin = coin.toUpperCase();
                
                const profit = data.filter(c => {
                    if (c.coin === coin)
                        return c;
                })[0];

                if (profit == undefined)
                    reject(`You dont' have this coin ${coin} is your wallet`);

                resolve(profit);
            }, delay);
        });
    }
}