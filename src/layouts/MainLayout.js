export default function MainLayout({ children }) {
  return (
    <div className="global-main-layout">
      <div className="global-main-layout-aside"></div>
      <div className="global-main-layout-container">{children}</div>
    </div>
  );
}
