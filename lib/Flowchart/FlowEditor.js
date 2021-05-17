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
import styled from "styled-components";
import { Dock } from "./Components/Dock";
import { FCEditorContainer } from "./Components/FCEditor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function UnstyledFlowEditor(props) {
    return (_jsx("div", __assign({ className: props.className }, { children: _jsxs(DndProvider, __assign({ backend: HTML5Backend }, { children: [_jsx(Dock, { nodeList: props.nodeList }, void 0),
                _jsx(FCEditorContainer, { nodes: props.nodes, relations: props.relations }, void 0)] }), void 0) }), void 0));
}
var FlowEditor = styled(UnstyledFlowEditor)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n"], ["\n  height: 100%;\n  width: 100%;\n  display: flex;\n"])));
export default FlowEditor;
var templateObject_1;
//# sourceMappingURL=FlowEditor.js.map