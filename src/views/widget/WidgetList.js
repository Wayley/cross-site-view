import { BaseGauge, GradientGauge } from './gauge';
import './WidgetList.css';
export default function WidgetList() {
  const widgetStyle = { height: 200 };
  return (
    <div className="widget-list-page">
      <div className="gallery-item-box">
        {new Array(13).fill('widget').map((v, k) => (
          <div className="gallery-item-chart" key={k}>
            {k % 2 === 0 ? (
              <BaseGauge style={widgetStyle} />
            ) : (
              <GradientGauge style={widgetStyle} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
