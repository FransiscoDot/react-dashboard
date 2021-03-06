import React from 'react';
import { DatePicker, Tabs, Row, Col } from 'antd';
import { ChartCard } from 'ant-design-pro/lib/Charts';
import moment from 'moment';
import BalanceChart from "./BalanceChart";
import UpcomingPaymentsList from "./UpcomingPaymentsList";
const TabPane = Tabs.TabPane;
const RangePicker = DatePicker.RangePicker;

const datePicker = (
  <RangePicker
  ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
  showTime
  format="YYYY/MM/DD"
  />
);

class BalanceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.callback = this.callback.bind(this);
  }

  callback() {
    // Yay
  }

  render() {
    return (
      <ChartCard title="Balance" style={{margin: "8px 0"}}>
        <Tabs defaultActiveKey="1" onChange={this.callback} tabBarExtraContent={datePicker}>
          <TabPane tab="Btn" key="1">
            <Row>
              <Col span={6}>
                <UpcomingPaymentsList />
              </Col>
              <Col span={18}>
                <BalanceChart />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Eth" key="2">
            <Row>
              <Col span={6}>
                <UpcomingPaymentsList />
              </Col>
              <Col span={18}>
                <BalanceChart />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="ZCash" key="3">
            <Row>
              <Col span={6}>
                <UpcomingPaymentsList />
              </Col>
              <Col span={18}>
                <BalanceChart />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </ChartCard>
    );
  }
}

export default BalanceCard;
