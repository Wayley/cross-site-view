import React, { useState, useEffect } from 'react';
import { Liquid, measureTextWidth } from '@ant-design/charts';

const SphericalLiquid = ({ ...props }) => {
  var [percent, setPercent] = useState(0.26);
  var ref;
  var config = {
    percent,
    radius: 0.8,
    statistic: {
      title: {
        formatter: function formatter() {
          return '';
        },
        style: function style(_ref) {
          var percent = _ref.percent;
          return { fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)' };
        },
      },
      content: {
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: 60,
            lineHeight: 1,
            fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
          };
        },
        customHtml: function customHtml(container, view, _ref3) {
          var percent = _ref3.percent;
          var _container$getBoundin = container.getBoundingClientRect(),
            width = _container$getBoundin.width,
            height = _container$getBoundin.height;
          var d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          var text = '占比 '.concat((percent * 100).toFixed(0), '%');
          var textWidth = (0, measureTextWidth)(text, { fontSize: 60 });
          var scale = Math.min(d / textWidth, 1);
          return '<div style="width:'
            .concat(
              d,
              'px;display:flex;align-items:center;justify-content:center;font-size:'
            )
            .concat(scale, 'em;line-height:')
            .concat(scale <= 1 ? 1 : 'inherit', '">')
            .concat(text, '</div>');
        },
      },
    },
    liquidStyle: function liquidStyle(_ref4) {
      var percent = _ref4.percent;
      return {
        fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
        stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
      };
    },
    color: function color() {
      return '#5B8FF9';
    },
  };
  useEffect(() => {
    var data = 0.25;
    var interval = setInterval(function () {
      data += Math.min(Math.random() * 0.1, 0.1);
      if (data < 0.75) {
        setPercent(data);
      } else {
        clearInterval(interval);
      }
    }, 500);
  }, []);
  return <Liquid {...config} {...props} />;
};

export default SphericalLiquid;
