import { Steps } from "antd";
import { FlowNode } from "@demo/components";

interface Props {
  flowNodes: FlowNode[];
}

export function CleanFlow(props: Props) {
  return (
    <Steps
      progressDot
      direction="vertical"
      size="small"
      current={0}
      items={[
        { title: "Finished", description: "11" },
        {
          title: "In Progress",
          description: "111",
        },
        {
          title: "Waiting",
          description: "11",
        },
      ]}
    />
  );
}
