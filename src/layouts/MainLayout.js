import SideNav from '../components/SideNav';
export default function MainLayout({ children }) {
  return (
    <div className="global-main-layout">
      <div className="global-main-layout-aside">
        <SideNav />
      </div>
      <div className="global-main-layout-container">{children}</div>
    </div>
  );
}
