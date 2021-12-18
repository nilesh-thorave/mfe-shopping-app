import { Layout } from "antd";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { SiteContent } from "./Layout.style";
const { Content } = Layout;

function MyLayout() {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "50px 50px 0" }}>
        <SiteContent>Content</SiteContent>
      </Content>
      <Footer />
    </Layout>
  );
}

export default MyLayout;
