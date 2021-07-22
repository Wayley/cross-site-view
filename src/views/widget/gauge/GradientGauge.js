import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const GradientGauge = ({ ...props }) => {
  const [percent, setPercent] = useState(0);
  const ticks = [0, 1 / 3, 2 / 3, 1];
  const color = ['#F4664A', '#FAAD14', '#30BF78'];
  const config = {
    percent,
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      title: {
        formatter: (ref) => {
          var percent = ref.percent;
          return percent < ticks[1] ? '差' : percent < ticks[2] ? '中' : '优';
        },
        style: (ref) => {
          var percent = ref.percent;
          return {
            fontSize: 16,
            lineHeight: 1,
            color:
              percent < ticks[1]
                ? color[0]
                : percent < ticks[2]
                ? color[1]
                : color[2],
          };
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

export default GradientGauge;
