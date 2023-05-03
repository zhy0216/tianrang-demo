import { Button, DatePicker, Space, Steps, Divider } from "antd";
import {
  Comment,
  Donation,
  CleanFlow,
  FlowNode,
  FlowType,
} from "../components";

export default function Home() {
  const flowNodes: FlowNode[] = [
    {
      type: FlowType.CREATED,
      message: "您的工单已经创建，请您耐心等待",
      createdAt: "2023-02-15: 13:15",
    },
  ];

  return (
    <>
      <Comment />
      <Divider />

      <Donation />
      <Divider />

      <CleanFlow flowNodes={flowNodes} />
    </>
  );
}
