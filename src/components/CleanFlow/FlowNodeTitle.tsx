import { FlowNode, FlowType } from "./types";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { formatActor } from "./utils";
import { exhaustiveGuard } from "@demo/utils";

interface Props {
  flowNode: FlowNode;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const renderTitle = (flowNode: FlowNode) => {
  const flowType = flowNode.type;

  switch (flowType) {
    case FlowType.COMMENT:
      return (
        <Typography.Text>
          <Typography.Text type="secondary">
            {formatActor(flowNode.actor)}
          </Typography.Text>
          已评价
        </Typography.Text>
      );
    case FlowType.FINISH:
      return (
        <Typography.Text>
          <Typography.Text type="secondary">
            {formatActor(flowNode.actor)}
          </Typography.Text>
          已完成
        </Typography.Text>
      );
    case FlowType.REOPEN:
      return <Typography.Text>重新打开</Typography.Text>;
    case FlowType.TRANSFER:
      return <Typography.Text>已转交</Typography.Text>;
    case FlowType.TAKE_ORDER:
      return <Typography.Text>已接单</Typography.Text>;
    case FlowType.CREATED:
      return <Typography.Text>已创建</Typography.Text>;
    case FlowType.ADD_MEMO:
      return (
        <Typography.Text>
          {flowNode.actor === "me" ? (
            <Typography.Link>{formatActor(flowNode.actor)} </Typography.Link>
          ) : (
            <Typography.Text type="secondary">
              {formatActor(flowNode.actor)}
            </Typography.Text>
          )}
          添加了备注
        </Typography.Text>
      );
    default:
      exhaustiveGuard(flowType);
  }
};

export function FlowNodeTitle({ flowNode }: Props) {
  return (
    <Container>
      {renderTitle(flowNode)}
      <Typography.Text type="secondary">{flowNode.createdAt}</Typography.Text>
    </Container>
  );
}
