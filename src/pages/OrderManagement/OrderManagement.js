import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "cart/ProductCartApp";

function OrderManagement({ isSignedIn }) {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname } = location;
    if (isSignedIn)
      mount(ref.current, {
        currentPath: pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          if (pathname !== nextPathname) {
            navigate(nextPathname);
          }
        },
        isSignedIn,
      });
    else navigate("/sign-in");
  }, [location]);

  return <div ref={ref} />;
}

export default OrderManagement;
