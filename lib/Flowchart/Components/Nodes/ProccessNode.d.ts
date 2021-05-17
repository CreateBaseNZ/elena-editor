import { ElenaNode, FCEditorMode } from "../../Data/NodeData";
import React from "react";
interface ProcessNodeContainerProps {
    className?: string;
    hasContextMenu: boolean;
    node: ElenaNode;
    mode: FCEditorMode;
    setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>;
    removeNode?: (targetNode: ElenaNode) => void;
}
declare const ProcessNodeContainer: import("styled-components").StyledComponent<(props: ProcessNodeContainerProps) => JSX.Element, any, {}, never>;
export default ProcessNodeContainer;
