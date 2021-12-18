import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Auth from "../Auth";
import Dashboard from "../Dashboard";
import OrderManagement from "../OrderManagement";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { SiteContent } from "./Layout.style";
const { Content } = Layout;

function MyLayout() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: "50px 50px 0" }}>
          <SiteContent>
            <Routes>
              <Route path="sign-in" element={<Auth />} />
              <Route path="home" element={<Dashboard />} />
              <Route path="my-cart" element={<OrderManagement />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </SiteContent>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default MyLayout;
