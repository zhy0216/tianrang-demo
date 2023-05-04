export enum FlowType {
  COMMENT = "COMMENT",
  FINISH = "FINISH",
  TRANSFER = "TRANSFER",
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

interface AddMemoFlowNode extends GeneralFlowNode {
  type: FlowType.ADD_MEMO;
  memo: string;
  actor: Actor;
}

interface TakeOrderFlowNode extends GeneralFlowNode {
  type: FlowType.TAKE_ORDER;
  actor: Actor;
}

interface ReopenFlowNode extends GeneralFlowNode {
  type: FlowType.REOPEN;
  originalFlowNode: FlowNode;
}

interface TransferFlowNode extends GeneralFlowNode {
  type: FlowType.TRANSFER;
  fromActor: Actor;
  toActor: Actor;
}

interface FinishFlowNode extends GeneralFlowNode {
  type: FlowType.FINISH;
  actor: Actor;
  location: string;
  images: string[];
  message: string;
}

interface CommentFlowNode extends GeneralFlowNode {
  type: FlowType.COMMENT;
  comment: string;
  actor: Actor;
}

export type FlowNode =
  | CreatedFlowNode
  | AddMemoFlowNode
  | TransferFlowNode
  | TakeOrderFlowNode
  | ReopenFlowNode
  | FinishFlowNode
  | CommentFlowNode;
