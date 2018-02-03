import React from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';
import moment from "moment";

const data = [];
const beginDay = new Date().getTime();
for (let i = 0; i <25; i += 1) {
  data.push({
    x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10
  });
}

const BalanceChart = () => {
  return (
      <Bar
        height={300}
        title="Ethereum"
        data={data}
      />
  );
};

export default BalanceChart;

