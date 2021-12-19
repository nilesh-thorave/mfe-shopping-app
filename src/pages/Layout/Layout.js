import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageLoader from "../../components/PageLoader";

import { SiteContent } from "./Layout.style";

const DashboardLazy = lazy(() => import("../Dashboard"));
const AuthLazy = lazy(() => import("../Auth"));
const OrderManagementLazy = lazy(() => import("../OrderManagement"));

const { Content } = Layout;

function MyLayout() {
  const [isSignedIn, setSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
        <Content style={{ padding: "50px 50px 0" }}>
          <SiteContent>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="sign-in"
                  element={<AuthLazy setSignedIn={setSignedIn} />}
                />
                <Route path="sign-up" element={<AuthLazy />} />
                <Route path="home" element={<DashboardLazy />} />
                <Route path="products/*" element={<DashboardLazy />} />
                <Route
                  path="my-cart"
                  element={<OrderManagementLazy isSignedIn={isSignedIn} />}
                />
                <Route
                  path="order"
                  element={<OrderManagementLazy isSignedIn={isSignedIn} />}
                />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </Routes>
            </Suspense>
          </SiteContent>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default MyLayout;
