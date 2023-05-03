import { FlowNode } from "./types";
import styled from "@emotion/styled";
import { Typography } from "antd";

interface Props {
  flowNode: FlowNode;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function FlowNodeTitle({ flowNode }: Props) {
  return (
    <Container>
      <Typography.Text>this is title</Typography.Text>
      <Typography.Text type="secondary">{flowNode.createdAt}</Typography.Text>
    </Container>
  );
}
