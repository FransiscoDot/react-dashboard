import React from 'react';
import {Row, Col} from "antd";
import BalanceCard from "./BalanceCard";

const BalancePage = () => (
  <div>
    <Row gutter={8}>
          <Col span={24}>
            <BalanceCard />
          </Col>
    </Row>
  </div>
);

export default BalancePage;
