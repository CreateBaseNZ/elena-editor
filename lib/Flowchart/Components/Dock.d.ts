/// <reference types="react" />
import { ElenaNode } from "../Data/NodeData";
interface DockProps {
    className?: string;
    nodeList: ElenaNode[];
    variableList?: {};
}
export declare const Dock: import("styled-components").StyledComponent<(props: DockProps) => JSX.Element, any, {}, never>;
export {};
