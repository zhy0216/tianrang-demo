export enum FlowType {
  COMMENT = "COMMENT",
  FINISH = "FINISH",
  REOPEN = "REOPEN",
  ADD_MEMO = "ADD_MEMO",
  TAKE_ORDER = "TAKE_ORDER",
  CREATED = "CREATED",
}

export type Actor =
  | {
      name: string;
      role: string;
    }
  | "me";

export interface GeneralFlowNode {
  type: FlowType;
  createdAt: string;
}

interface CreatedFlowNode extends GeneralFlowNode {
  type: FlowType.CREATED;
  message: string;
}

export type FlowNode = GeneralFlowNode | CreatedFlowNode;
