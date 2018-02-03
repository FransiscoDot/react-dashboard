import React from 'react';
import PropTypes from "prop-types";
import {ChartCard, Field} from 'ant-design-pro/lib/Charts';
import { Icon, Tooltip } from 'antd';
import Trend from 'ant-design-pro/lib/Trend';
import numeral from 'numeral';

const ProfitCard = ({title, total, totalLast, profitPercentage, icon}) =>{
  return (
    <ChartCard
        title={title}
        action={<Tooltip title="Profit"><Icon type="info-circle-o" /></Tooltip>}
        total={numeral(total).format("0,0")}
        footer={<Field label="Last month" value={numeral(totalLast).format('0,0')} />}
        contentHeight={46}
        avatar={
          <img
            style={{ width: 56, height: 56 }}
            src={icon}
            alt="indicator"
          />
        }
        style={{margin: "8px 0"}}
      >
        <span>
          Profit this month
          <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>{profitPercentage + "%"}</Trend>
        </span>
      </ChartCard>
  );
};

ProfitCard.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  totalLast: PropTypes.number.isRequired,
  profitPercentage: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

export default ProfitCard;
