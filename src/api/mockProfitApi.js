import delay from "./delay";

const data = [
    {
        "name": "BTC",
        "profit": 4.589
    },
    {
        "name": "ETH",
        "profit": 7.894
    },
    {
        "name": "USD",
        "profit": 2980
    }
];

export class ProfitApi {
    static getProfitFromCoin(coin) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                coin = coin.toUpperCase();
                
                const profit = data.filter(c => {
                    if (c.name === coin)
                        return c;
                })[0];

                if (profit == undefined)
                    reject(`You dont' have this coin ${coin} is your wallet`);

                resolve(profit);
            }, delay);
        });
    }
}