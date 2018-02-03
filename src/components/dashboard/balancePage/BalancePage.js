import React from 'react';
import {Row, Col} from "antd";
import BalanceCard from "./BalanceCard";
import ProfitCard from "./ProfitCard";
import * as constant from "./styles/responsiveCostants";

const BalancePage = () => (
  <div>
    <Row gutter={8}>
          <Col span={24}>
            <BalanceCard />
          </Col>
    </Row>
    <Row gutter={16}>
      <Col xs={constant.xsProfit} sm={constant.smProfit} md={constant.mdProfit} lg={constant.lgProfit} xl={constant.xlProfit}>
        <ProfitCard
          title="Bitcoin"
          total={12777}
          totalLast={11980}
          profitPercentage={12}
          icon="https://png.icons8.com/ios-glyphs/96/00101f/bitcoin.png"/>
      </Col>
      <Col xs={constant.xsProfit} sm={constant.smProfit} md={constant.mdProfit} lg={constant.lgProfit} xl={constant.xlProfit}>
        <ProfitCard
          title="Ethereum"
          total={4590}
          totalLast={2445}
          profitPercentage={50}
          icon="https://png.icons8.com/windows/96/00101f/ethereum.png"/>
      </Col>
      <Col xs={constant.xsProfit} sm={constant.smProfit} md={constant.mdProfit} lg={constant.lgProfit} xl={constant.xlProfit}>
        <ProfitCard
          title="Dollar"
          total={7430}
          totalLast={5600}
          profitPercentage={21}
          icon="https://png.icons8.com/ios-glyphs/96/00101f/us-dollar.png"/>
      </Col>
  </Row>
  </div>
);

export default BalancePage;
