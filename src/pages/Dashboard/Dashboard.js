import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "dashboard/DashboardApp";

function Dashboard() {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname } = location || {};
    mount(ref.current, {
      currentPath: pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });
  }, [location]);

  return <div ref={ref} />;
}

export default Dashboard;
