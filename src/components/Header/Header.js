import { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Logo } from "./Header.style";
const { Header } = Layout;

const MENU_ITEMS = [
  {
    to: "/home",
    displayLabel: "Home",
  },
  {
    to: "/my-cart",
    displayLabel: "My Cart",
  },
  {
    to: "/sign-in",
    displayLabel: "Register/Login",
  },
];
function ShoppingHeader() {
  const { pathname } = useLocation();
  const [defaultPath, setDefaultPath] = useState();
  const navigate = useNavigate();
  const onMenuClick = (menuItem) => {
    navigate(menuItem.to);
  };

  useEffect(() => {
    const path = MENU_ITEMS.find(
      (menuItem) => menuItem.to === pathname
    )?.displayLabel;
    setDefaultPath(path);
  }, [pathname]);

  return (
    <Header>
      <NavLink to="/home">
        <Logo />
      </NavLink>
      <Menu theme="dark" mode="horizontal" selectedKeys={[defaultPath]}>
        {MENU_ITEMS.map((item) => {
          return (
            <Menu.Item
              key={item.displayLabel}
              onClick={() => onMenuClick(item)}
            >
              {item.displayLabel}
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
}

export default ShoppingHeader;
