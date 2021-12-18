import { Layout, Menu } from "antd";
import { Logo } from "./Header.style";
const { Header } = Layout;

function ShoppingHeader() {
  return (
    <Header>
      <Logo />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(6).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
}

export default ShoppingHeader;
