import { useHistory, useLocation } from 'react-router-dom';

const navs = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/widget',
    label: 'Widget',
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
  },
];
export default function SideNav({ width = 280 }) {
  const history = useHistory();
  const location = useLocation();
  const activePath = location.pathname;
  const goRouter = (path) => {
    history.push(path);
  };
  return (
    <div className="global-side-nav" style={{ width }}>
      {navs &&
        navs.map(({ path, label }) => (
          <div
            className={
              activePath === path
                ? 'global-side-nav-item global-side-nav-item-active'
                : 'global-side-nav-item'
            }
            key={path}
            onClick={() => goRouter(path)}
          >
            {label}
          </div>
        ))}
    </div>
  );
}
