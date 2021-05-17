import { ElenaNode, FCEditorMode } from "../../Data/NodeData";
import React from "react";
interface TerminatorNodeContainerProps {
    className?: string;
    node: ElenaNode;
    hasContextMenu: boolean;
    mode: FCEditorMode;
    setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>;
    removeNode?: (targetNode: ElenaNode) => void;
}
declare const TerminatorNodeContainer: import("styled-components").StyledComponent<(props: TerminatorNodeContainerProps) => JSX.Element, any, {}, never>;
export default TerminatorNodeContainer;
