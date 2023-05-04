import { Actor, FlowNode, FlowType } from "./types";

export const formatActor = (actor: Actor): string => {
  return actor === "me" ? "我" : `${actor.role} ${actor.name} `;
};
