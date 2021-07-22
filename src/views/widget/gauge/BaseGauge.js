import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const BaseGauge = ({ ...props }) => {
  const ticks = [0, 1 / 3, 2 / 3, 1];
  const colors = ['#F4664A', '#FAAD14', '#30BF78'];

  const [percent, setPercent] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const config = {
    percent,
    range: { color },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    axis: {
      label: {
        formatter: (v) => {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 3 },
    },
    statistic: {
      content: {
        formatter: (ref) => {
          const percent = ref.percent;
          return 'Rate: '.concat((percent * 100).toFixed(0), '%');
        },
        style: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 18,
        },
      },
    },
  };
  useEffect(() => {
    let data = percent;
    let color;
    const interval = setInterval(function () {
      data += 0.025;
      if (data >= 1) {
        data = 1;
        clearInterval(interval);
      }
      color =
        data < ticks[1] ? colors[0] : data < ticks[2] ? colors[1] : colors[2];
      setPercent(data);
      setColor(color);
    }, 500);
  }, []);
  return <Gauge {...config} {...props} />;
};

export default BaseGauge;
