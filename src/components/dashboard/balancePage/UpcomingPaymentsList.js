import React from 'react';
import { List } from 'antd';

const data = [
  {
    title: '1 Day',
  },
  {
    title: '1 Week',
  },
  {
    title: '1 Month',
  },
  {
    title: '1 Year',
  },
];

const UpcomingPaymentsList = () => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="">{item.title}</a>}
              description="0 BTC = 0.00 USD"
            />
          </List.Item>
      )} />
    </div>
  );
};

export default UpcomingPaymentsList;
