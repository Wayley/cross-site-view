import { Divider } from 'antd';

import Gauges from './gauge';
import Liquids from './liquid';
import './WidgetList.css';
export default function WidgetList() {
  const widgetStyle = { height: 200 };

  return (
    <div className="widget-list-page">
      <div className="gallery-item-box">
        {Object.keys(Gauges).map((key) => {
          const Guage = Gauges[key];
          return (
            <div className="gallery-item-chart" key={key}>
              <Guage style={widgetStyle} />
            </div>
          );
        })}
        <Divider />
        {Object.keys(Liquids).map((key) => {
          const Liquid = Liquids[key];
          return (
            <div className="gallery-item-chart" key={key}>
              <Liquid style={widgetStyle} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
