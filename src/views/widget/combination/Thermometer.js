import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const Thermometer = ({ ...props }) => {
  const [chart, setChart] = useState(null);

  const TP_value = 31;
  const max = 60; // 温度计最大值
  const min = -60; // 温度计最小值
  const highWire = 20; // 高温线
  const lowWire = -20; // 低温线
  const offset = 3;

  // 当低于-30时，为了显示美观，指定位置
  const boxPosition = TP_value < -30 ? [65, -70] : [65, 0];
  // 超出最大/最小值时,显示最大/最小值和偏移量校正
  const showValue =
    TP_value > max ? max + offset : TP_value < min ? min - offset : TP_value;

  var TP_txt = '';
  var kd = [];
  var Gradient = [];
  // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
  for (var i = 0, len = 135; i <= len; i++) {
    if (i < 10 || i > 130) {
      kd.push('');
    } else {
      if ((i - 10) % 20 === 0) {
        kd.push('-3');
      } else if ((i - 10) % 4 === 0) {
        kd.push('-1');
      } else {
        kd.push('');
      }
    }
  }
  if (TP_value > highWire) {
    TP_txt = '温度偏高';
    Gradient.push(
      {
        offset: 0,
        color: '#93FE94',
      },
      {
        offset: 0.5,
        color: '#E4D225',
      },
      {
        offset: 1,
        color: '#E01F28',
      }
    );
  } else if (TP_value > lowWire) {
    TP_txt = '温度正常';
    Gradient.push(
      {
        offset: 0,
        color: '#93FE94',
      },
      {
        offset: 1,
        color: '#E4D225',
      }
    );
  } else {
    TP_txt = '温度偏低';
    Gradient.push({
      offset: 1,
      color: '#93FE94',
    });
  }
  const leftColor = Gradient[Gradient.length - 1].color;

  // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
  var option = {
    backgroundColor: '#0C2F6F',
    yAxis: [
      {
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
          show: false,
        },
      },
      {
        show: false,
        min: 0,
        max: 50,
      },
      {
        type: 'category',
        data: ['', '', '', '', '', '', '', '', '', '', '°C'],
        position: 'left',
        offset: -80,
        axisLabel: {
          fontSize: 10,
          color: 'white',
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    xAxis: [
      {
        show: false,
        min: -10,
        max: 80,
        data: [],
      },
      {
        show: false,
        min: -10,
        max: 80,
        data: [],
      },
      {
        show: false,
        min: -10,
        max: 80,
        data: [],
      },
      {
        show: false,
        min: -5,
        max: 80,
      },
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        // 对应上面XAxis的第一个对象配置
        xAxisIndex: 0,
        data: [
          {
            value: showValue + 70,
            label: {
              normal: {
                show: true,
                position: boxPosition,
                backgroundColor: {
                  image: 'plugin/subway_beijing/images/power/bg5Valuebg.png', //文字框背景图
                },
                width: 200,
                height: 100,
                formatter: `{a| ${TP_value} }{b|°C}\n{c| ${TP_txt} }`,
                rich: {
                  a: {
                    align: 'center',
                    lineHeight: 50,
                    fontSize: 40,
                    fontFamily: 'digifacewide',
                    color: leftColor,
                  },
                  b: {
                    fontFamily: '微软雅黑',
                    fontSize: 15,
                    lineHeight: 50,
                    color: leftColor,
                  },
                  c: {
                    lineHeight: 50,
                    fontSize: 25,
                    align: 'center',
                    color: '#fff',
                  },
                },
              },
            },
          },
        ],

        barWidth: 18,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient),
          },
        },
        z: 2,
      },
      {
        name: '白框',
        type: 'bar',
        xAxisIndex: 1,
        barGap: '-100%',
        data: [134],
        barWidth: 28,
        itemStyle: {
          normal: {
            color: '#0C2E6D',
            barBorderRadius: 50,
          },
        },
        z: 1,
      },
      {
        name: '外框',
        type: 'bar',
        xAxisIndex: 2,
        barGap: '-100%',
        data: [135],
        barWidth: 38,
        itemStyle: {
          normal: {
            color: '#4577BA',
            barBorderRadius: 50,
          },
        },
        z: 0,
      },
      {
        name: '圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 0,
        symbolSize: 48,
        itemStyle: {
          normal: {
            color: '#93FE94',
            opacity: 1,
          },
        },
        z: 2,
      },
      {
        name: '白圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 1,
        symbolSize: 60,
        itemStyle: {
          normal: {
            color: '#0C2E6D',
            opacity: 1,
          },
        },
        z: 1,
      },
      {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 2,
        symbolSize: 70,
        itemStyle: {
          normal: {
            color: '#4577BA',
            opacity: 1,
          },
        },
        z: 0,
      },
      {
        name: '刻度',
        type: 'bar',
        yAxisIndex: 0,
        xAxisIndex: 3,
        label: {
          normal: {
            show: true,
            position: 'left',
            distance: 10,
            color: 'white',
            fontSize: 14,
            formatter: function (params) {
              if (params.dataIndex > 130 || params.dataIndex < 10) {
                return '';
              } else {
                if ((params.dataIndex - 10) % 20 === 0) {
                  return params.dataIndex - 70;
                } else {
                  return '';
                }
              }
            },
          },
        },
        barGap: '-100%',
        data: kd,
        barWidth: 1,
        itemStyle: {
          normal: {
            color: 'white',
            barBorderRadius: 120,
          },
        },
        z: 0,
      },
    ],
  };
  useEffect(() => {
    const chart = echarts.init(document.getElementById('thermometer-main'));
    setChart(chart);
  }, []);
  chart && option && chart.setOption(option, true);

  return <div id="thermometer-main" {...props}></div>;
};

export default Thermometer;
