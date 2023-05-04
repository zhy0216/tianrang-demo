import { Divider } from "antd";
import {
  CleanFlow,
  Comment,
  Donation,
  FlowNode,
  FlowType,
} from "../components";

export default function Home() {
  const flowNodes: FlowNode[] = [
    {
      type: FlowType.COMMENT,
      actor: {
        role: "保洁",
        name: "王红",
      },
      comment: "这是一条评论",
      createdAt: "2023-02-15: 17:15",
    },
    {
      type: FlowType.FINISH,
      actor: {
        role: "保洁",
        name: "王红",
      },
      location: "航汇大厦",
      images: [
        "https://img.freepik.com/free-photo/day-city-view_1417-1777.jpg",
        "https://img.freepik.com/free-photo/day-city-view_1417-1777.jpg",
      ],
      message: "这是一条完成情况说明",
      createdAt: "2023-02-15: 17:15",
    },
    {
      type: FlowType.REOPEN,
      originalFlowNode: {
        type: FlowType.TRANSFER,
        fromActor: {
          role: "管家",
          name: "小白",
        },
        toActor: {
          role: "保洁",
          name: "王红",
        },
        createdAt: "2023-02-15: 17:15",
      },
      createdAt: "2023-02-15: 19:24",
    },
    {
      type: FlowType.ADD_MEMO,
      actor: {
        role: "保洁",
        name: "王红",
      },
      memo: "这是一条备注信息",
      createdAt: "2023-02-15: 17:15",
    },
    {
      type: FlowType.TAKE_ORDER,
      actor: {
        role: "保洁",
        name: "王红",
      },
      createdAt: "2023-02-15: 17:15",
    },
    {
      type: FlowType.TRANSFER,
      fromActor: {
        role: "管家",
        name: "小白",
      },
      toActor: {
        role: "保洁",
        name: "王红",
      },
      createdAt: "2023-02-15: 17:15",
    },
    {
      type: FlowType.ADD_MEMO,
      actor: "me",
      memo: "这是一条用户订单需求描述的备注",
      createdAt: "2023-02-15: 17:15",
    },
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
