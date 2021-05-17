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
var UnstyledNodeIO = function (props) {
    return (_jsxs("div", __assign({ className: props.className }, { children: [_jsx("ul", { children: props.inputs &&
                    props.inputs.map(function (input, index) {
                        return (_jsxs("li", { children: [input, _jsx("select", { children: _jsx("option", __assign({ value: "default" }, { children: "default" }), void 0) }, void 0)] }, index));
                    }) }, void 0),
            _jsx("ul", { children: props.outputs &&
                    props.outputs.map(function (output, index) {
                        return (_jsxs("li", { children: [output, _jsx("select", { children: _jsx("option", __assign({ value: "default" }, { children: "default" }), void 0) }, void 0)] }, index));
                    }) }, void 0)] }), void 0));
};
var NodeIO = styled(UnstyledNodeIO)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n\n  & ul {\n    margin: 5px;\n    padding: 0;\n\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  & li {\n    padding: 0.5rem;\n\n    & div {\n      margin: auto;\n    }\n\n    & select {\n      cursor: pointer;\n    }\n  }\n"], ["\n  width: 100%;\n\n  & ul {\n    margin: 5px;\n    padding: 0;\n\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  & li {\n    padding: 0.5rem;\n\n    & div {\n      margin: auto;\n    }\n\n    & select {\n      cursor: pointer;\n    }\n  }\n"])));
export default NodeIO;
var templateObject_1;
//# sourceMappingURL=NodeIO.js.map