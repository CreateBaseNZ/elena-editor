import React from "react";
import { ElenaNode, ElenaRelation } from "../Data/NodeData";
interface FCEditorContainerProps {
    className?: string;
    nodes?: ElenaNode[];
    relations?: ElenaRelation[];
    setCode?: React.Dispatch<React.SetStateAction<string>>;
}
export declare const FCEditorContainer: import("styled-components").StyledComponent<(props: FCEditorContainerProps) => JSX.Element, any, {}, never>;
export {};
