import { Steps } from "antd";
import { FlowNode } from "./types";
import { FlowNodeTitle } from "./FlowNodeTitle";
import styled from "@emotion/styled";

interface Props {
  flowNodes: FlowNode[];
}

const StyledSteps = styled(Steps)`
  .ant-steps-item-title {
    width: 400px;
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
      }))}
    />
  );
}
