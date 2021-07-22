import './WidgetList.css';
export default function WidgetList() {
  return (
    <div className="widget-list-page">
      <div className="global-flex-wrapper">
        {new Array(14).fill('widget').map((v, k) => (
          <div className="global-flex-item widget-item" key={k}>
            widget {k}
          </div>
        ))}
      </div>
    </div>
  );
}
