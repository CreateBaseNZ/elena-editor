var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { DragTypes } from "./FCNodes";
import { NodeContextMenu } from "../Menus/NodeContextMenu";
import NodeHeading from "./Node Components/NodeHeading";
function UnstyledTerminatorNode(props) {
    return (_jsxs("div", __assign({ className: props.className }, { children: [_jsx(NodeHeading, { name: props.node.name }, void 0),
            _jsx(NodeContextMenu, { isActive: props.hasContextMenu, node: props.node, setMode: props.setMode, removeNode: props.removeNode }, void 0)] }), void 0));
}
var TerminatorNode = styled(UnstyledTerminatorNode)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: auto;\n\n  border-style: solid;\n  border-color: #b48ead;\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  background-color: ", ";\n  color: #eceff4;\n"], ["\n  width: 100%;\n  height: auto;\n\n  border-style: solid;\n  border-color: #b48ead;\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  background-color: ",
    ";\n  color: #eceff4;\n"])), function (props) {
    return props.mode === "Normal" ? "#3b4252" : "#a3be8c";
});
var UnstyledTerminatorNodeContainer = function (props) {
    var _a = useDrag(function () { return ({
        type: DragTypes.NODE,
        item: props.node,
        collect: function (monitor) {
            var _a;
            return ({
                isDragging: props.node.id === ((_a = monitor.getItem()) === null || _a === void 0 ? void 0 : _a.id),
            });
        },
    }); }), isDragging = _a[0].isDragging, drag = _a[1];
    var handleClick = function () {
        props.setMode && props.mode === "Relation" && props.setMode("Normal");
    };
    return (_jsx("div", __assign({ className: props.className, ref: drag, onClick: handleClick, id: props.node.id }, { children: _jsx(TerminatorNode, { node: props.node, isDragging: isDragging, hasContextMenu: props.hasContextMenu, mode: props.mode, setMode: props.setMode, removeNode: props.removeNode }, void 0) }), void 0));
};
var TerminatorNodeContainer = styled(UnstyledTerminatorNodeContainer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 250px;\n  height: auto;\n\n  position: ", ";\n  z-index: ", ";\n\n  cursor: move;\n\n  transform: translate(\n    ", ",\n    ", "\n  );\n"], ["\n  width: 250px;\n  height: auto;\n\n  position: ", ";\n  z-index: ", ";\n\n  cursor: move;\n\n  transform: translate(\n    ", ",\n    ", "\n  );\n"])), function (props) { return (props.node.isStatic ? "static" : "absolute"); }, function (props) { return props.node.priority; }, function (props) { return props.node.xPos + "px"; }, function (props) { return props.node.yPos + "px"; });
export default TerminatorNodeContainer;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TerminatorNode.js.map