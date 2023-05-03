import type { AppProps } from "next/app";
import { Space, Layout, Col, Row } from "antd";
import styled from "@emotion/styled";
import "antd/dist/reset.css";

const StyledContent = styled(Layout.Content)`
  text-align: center;
  margin-top: 16px;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <StyledContent>
        <h1>tianrang Demo </h1>
        <Row>
          <Col span={8} offset={8}>
            <Component {...pageProps} />
          </Col>
        </Row>
      </StyledContent>
    </Space>
  );
}
