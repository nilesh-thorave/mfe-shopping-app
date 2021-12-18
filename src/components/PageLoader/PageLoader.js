import { Spin } from "antd";
import { LoaderContainer } from "./PageLoader.style";

function PageLoader() {
  return (
    <LoaderContainer>
      <Spin tip="Loading..." size="large" />
    </LoaderContainer>
  );
}

export default PageLoader;
