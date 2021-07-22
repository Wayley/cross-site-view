import Gauges, { BaseGauge, GradientGauge } from './gauge';
import './WidgetList.css';
export default function WidgetList() {
  const widgetStyle = { height: 200 };
  console.log(Gauges, '===');
  for (const key in Gauges) {
    if (Object.hasOwnProperty.call(Gauges, key)) {
      const Gauge = Gauges[key];
      console.log(Gauge, key, '----');
    }
  }
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
        {/* {new Array(13).fill('widget').map((v, k) => (
          <div className="gallery-item-chart" key={k}>
            {k % 2 === 0 ? (
              <BaseGauge style={widgetStyle} />
            ) : (
              <GradientGauge style={widgetStyle} />
            )}
          </div>
        ))} */}
      </div>
    </div>
  );
}
