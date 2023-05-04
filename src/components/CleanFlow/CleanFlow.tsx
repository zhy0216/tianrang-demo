import { Steps } from "antd";
import { FlowNode } from "./types";
import { FlowNodeTitle } from "./FlowNodeTitle";
import styled from "@emotion/styled";
import { FlowNodeDes } from "./FlowNodeDes";

interface Props {
  flowNodes: FlowNode[];
}

const StyledSteps = styled(Steps)`
  .ant-steps-item-content {
    width: 400px;
  }

  .ant-steps-item-title {
    width: 100%;
  }
`;

export function CleanFlow({ flowNodes }: Props) {
  return (
    <StyledSteps
      progressDot
      direction="vertical"
      size="small"
      current={0}
      items={flowNodes.map((flowNode) => ({
        title: <FlowNodeTitle flowNode={flowNode} />,
        description: <FlowNodeDes flowNode={flowNode} />,
      }))}
    />
  );
}
