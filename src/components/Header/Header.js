import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Logo } from "./Header.style";
const { Header } = Layout;

const MENU_ITEMS = [
  {
    to: "/home",
    displayLabel: "Home",
  },
  {
    to: "/home",
    displayLabel: "Dashboard",
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
  const navigate = useNavigate();
  const onMenuClick = (menuItem) => {
    navigate(menuItem.to);
  };
  return (
    <Header>
      <Link to="/home">
        <Logo />
      </Link>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["Home"]}>
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
