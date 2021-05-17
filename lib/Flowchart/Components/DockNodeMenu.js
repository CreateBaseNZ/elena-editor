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
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { renderNode } from "./Nodes/FCNodes";
// Note: ArcherContainer is needed here because the nodes are archer elements
var UnstyledDockNodeMenu = function (props) {
    return (_jsx("div", __assign({ className: props.className }, { children: _jsx("ul", { children: props.nodeList.map(function (node, index) {
                return _jsx("li", { children: renderNode(node, "Normal", false) }, index);
            }) }, void 0) }), void 0));
};
export var DockNodeMenu = styled(UnstyledDockNodeMenu)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: darkgray;\n  flex-grow: 1;\n  overflow-y: scroll;\n  scrollbar-width: none;\n\n  align-items: center;\n\n  & ul {\n    margin: 5px;\n    padding: 0;\n\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  & li {\n    padding: 0.5rem;\n\n    & div {\n      margin: auto;\n    }\n  }\n"], ["\n  background-color: darkgray;\n  flex-grow: 1;\n  overflow-y: scroll;\n  scrollbar-width: none;\n\n  align-items: center;\n\n  & ul {\n    margin: 5px;\n    padding: 0;\n\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  & li {\n    padding: 0.5rem;\n\n    & div {\n      margin: auto;\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=DockNodeMenu.js.map