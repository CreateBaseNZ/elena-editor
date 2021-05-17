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
import { DockNodeMenu } from "./DockNodeMenu";
import { DockSearch } from "./DockSearch";
import { DockTitle } from "./DockTitle";
var UnstyledDock = function (props) {
    return (_jsxs("div", __assign({ className: props.className }, { children: [_jsx(DockTitle, {}, void 0),
            _jsx(DockSearch, {}, void 0),
            _jsx(DockNodeMenu, { nodeList: props.nodeList }, void 0)] }), void 0));
};
export var Dock = styled(UnstyledDock)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n\n  overflow: hidden;\n  width: 20%;\n  min-width: 280px;\n  height: 100%;\n  background-color: grey;\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  overflow: hidden;\n  width: 20%;\n  min-width: 280px;\n  height: 100%;\n  background-color: grey;\n"])));
var templateObject_1;
//# sourceMappingURL=Dock.js.map