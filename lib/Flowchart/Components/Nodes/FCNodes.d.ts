import { ElenaNode, FCEditorMode, NodeType } from "../../Data/NodeData";
import React from "react";
declare const renderNode: (node: ElenaNode, mode: FCEditorMode, hasContextMenu: boolean, setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>> | undefined, removeNode?: ((targetNode: ElenaNode) => void) | undefined) => JSX.Element | null;
export { renderNode };
export type { NodeType as NodeTypes };
export declare const DragTypes: {
    NODE: string;
};
