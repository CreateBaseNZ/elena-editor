import { ElenaNode, ElenaRelation } from "./Data/NodeData";
import React from "react";
interface FlowEditorProps {
    className?: string;
    nodeList: ElenaNode[];
    variableList?: {};
    nodes?: ElenaNode[];
    relations?: ElenaRelation[];
    setCode?: React.Dispatch<React.SetStateAction<string>>;
}
declare function UnstyledFlowEditor(props: FlowEditorProps): JSX.Element;
declare const FlowEditor: import("styled-components").StyledComponent<typeof UnstyledFlowEditor, any, {}, never>;
export default FlowEditor;
