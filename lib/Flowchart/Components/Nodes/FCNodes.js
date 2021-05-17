import { jsx as _jsx } from "react/jsx-runtime";
import { v4 as uuid } from "uuid";
import TerminatorNodeContainer from "./TerminatorNode";
import ProcessNodeContainer from "./ProccessNode";
var renderNode = function (node, mode, hasContextMenu, setMode, removeNode) {
    switch (node === null || node === void 0 ? void 0 : node.type) {
        case "Process":
            return (_jsx(ProcessNodeContainer, { hasContextMenu: hasContextMenu, node: node, mode: mode, setMode: setMode, removeNode: removeNode }, uuid()));
        case "Terminator":
            return (_jsx(TerminatorNodeContainer, { hasContextMenu: hasContextMenu, node: node, mode: mode, setMode: setMode, removeNode: removeNode }, uuid()));
        default:
            return null;
    }
};
export { renderNode };
export var DragTypes = {
    NODE: "node",
};
//# sourceMappingURL=FCNodes.js.map