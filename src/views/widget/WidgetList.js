import { Divider } from 'antd';
import './WidgetList.css';

import SphericalLiquid from './liquid/SphericalLiquid';
import BaseGauge from './gauge/BaseGauge';
import GradientGauge from './gauge/GradientGauge';
import MeterGauge from './gauge/MeterGauge';
import CarPanel from './combination/CarPanel';

export default function WidgetList() {
  const widgetStyle = { height: 200 };
  return (
    <div className="widget-list-page">
      <div className="gallery-item-box">
        <div className="gallery-item-chart">
          <SphericalLiquid style={widgetStyle} />
        </div>
        <div className="gallery-item-chart">
          <BaseGauge style={widgetStyle} />
        </div>
        <div className="gallery-item-chart">
          <GradientGauge style={widgetStyle} />
        </div>
        <div className="gallery-item-chart">
          <MeterGauge style={widgetStyle} />
        </div>
      </div>

      <Divider />
      <div className="gallery-item-box">
        <div
          className="gallery-item-chart"
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 3,
          }}
        >
          <CarPanel />
        </div>
        <div className="gallery-item-chart">
          <MeterGauge style={widgetStyle} />
        </div>
        <div className="gallery-item-chart">
          <BaseGauge style={widgetStyle} />
        </div>
        <div className="gallery-item-chart">
          <SphericalLiquid style={widgetStyle} />
        </div>
      </div>
    </div>
  );
}
