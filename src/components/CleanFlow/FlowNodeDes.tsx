import { FlowNode, FlowType } from "./types";
import styled from "@emotion/styled";
import { Typography, Image } from "antd";
import { exhaustiveGuard } from "@demo/utils";
import { formatActor } from "@demo/components/CleanFlow/utils";
import { EnvironmentOutlined } from "@ant-design/icons";

interface Props {
  flowNode: FlowNode;
}

const Container = styled.div`
  background: aliceblue;
  padding: 4px 0 4px 8px;
  border-radius: 4px;
`;

const ImageContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;

const StyledParagraph = styled(Typography.Paragraph)`
  &&& {
    background: aliceblue;
    padding: 4px 0 4px 8px;
    border-radius: 4px;
    margin-bottom: 0;
  }
`;

export function FlowNodeDes({ flowNode }: Props) {
  const flowType = flowNode.type;
  switch (flowType) {
    case FlowType.COMMENT:
      return <Typography.Link>查看评价</Typography.Link>;
    case FlowType.FINISH:
      return (
        <Container>
          <Typography.Text>
            <EnvironmentOutlined style={{ marginRight: 5 }} />
            {flowNode.location}
          </Typography.Text>
          <ImageContainer>
            {flowNode.images.map((imgUrl, index) => (
              <Image key={index} width={50} src={imgUrl} />
            ))}
          </ImageContainer>
          <Typography.Text>{flowNode.message}</Typography.Text>
        </Container>
      );
    case FlowType.REOPEN:
      return <FlowNodeDes flowNode={flowNode.originalFlowNode} />;
    case FlowType.TAKE_ORDER:
      return (
        <Typography.Text>{formatActor(flowNode.actor)} 已接单</Typography.Text>
      );
    case FlowType.TRANSFER:
      return (
        <Typography.Text>
          {formatActor(flowNode.fromActor)} 已经转交
          {formatActor(flowNode.toActor)}
        </Typography.Text>
      );
    case FlowType.CREATED:
      return <Typography.Text>{flowNode.message}</Typography.Text>;
    case FlowType.ADD_MEMO:
      return <StyledParagraph>{flowNode.memo}</StyledParagraph>;
    default:
      exhaustiveGuard(flowType);
  }
}
