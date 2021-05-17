import React from "react";
import { ElenaNode, FCEditorMode } from "../../Data/NodeData";
interface NodeContextMenuProps {
    className?: string;
    node: ElenaNode;
    isActive: boolean;
    setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>;
    removeNode?: (targetNode: ElenaNode) => void;
}
declare const NodeContextMenu: import("styled-components").StyledComponent<(props: NodeContextMenuProps) => JSX.Element, any, {}, never>;
export { NodeContextMenu };
