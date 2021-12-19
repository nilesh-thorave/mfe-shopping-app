import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "auth/AuthApp";

function Auth({ setSignedIn }) {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const onSignIn = () => {
    setSignedIn(true);
    navigate("/my-cart");
  };

  useEffect(() => {
    const { pathname } = location || {};
    mount(ref.current, {
      currentPath: pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
      onSignIn,
    });
  }, [location]);

  return <div ref={ref} />;
}

export default Auth;
