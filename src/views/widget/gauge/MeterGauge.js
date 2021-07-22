import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const MeterGauge = ({ ...props }) => {
  const [percent, setPercent] = useState(0);
  const config = {
    percent,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
      width: 12,
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      content: {
        style: {
          fontSize: 18,
        },
      },
    },
  };
  useEffect(() => {
    let data = percent;
    const interval = setInterval(function () {
      data += 0.025;
      if (data >= 1) {
        data = 1;
        clearInterval(interval);
      }
      setPercent(data);
    }, 500);
  }, []);
  return <Gauge {...config} {...props} />;
};

export default MeterGauge;
