import { FlowNode, FlowType } from "./types";

export const getFlowTitle = (flowNode: FlowNode): string => {
  switch (flowNode.type) {
    case FlowType.ADD_MEMO:
      return "";

    default:
      throw new Error("Error - Unexpected default case!");
  }
};
