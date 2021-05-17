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
function UnstyledDockTitle(props) {
    return (_jsx("div", __assign({ className: props.className }, { children: _jsx("h1", { children: "Drag and Drop" }, void 0) }), void 0));
}
export var DockTitle = styled(UnstyledDockTitle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: lightgray;\n  & h1 {\n    margin: 0;\n  }\n"], ["\n  background-color: lightgray;\n  & h1 {\n    margin: 0;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=DockTitle.js.map