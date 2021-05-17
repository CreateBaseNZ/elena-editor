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
import { DirectionsBike } from "@material-ui/icons";
import styled from "styled-components";
var UnstyledNodeHeading = function (props) {
    return (_jsxs("div", __assign({ className: props.className }, { children: [_jsx("div", { children: _jsx(DirectionsBike, {}, void 0) }, void 0),
            _jsx("span", { children: props.name }, void 0)] }), void 0));
};
var NodeHeading = styled(UnstyledNodeHeading)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 50px;\n  display: flex;\n\n  justify-content: center;\n\n  pointer-events: none;\n\n  & div {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    padding: 15px;\n  }\n\n  & span {\n    align-items: center;\n    display: inline-flex;\n  }\n"], ["\n  width: 100%;\n  height: 50px;\n  display: flex;\n\n  justify-content: center;\n\n  pointer-events: none;\n\n  & div {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    padding: 15px;\n  }\n\n  & span {\n    align-items: center;\n    display: inline-flex;\n  }\n"])));
export default NodeHeading;
var templateObject_1;
//# sourceMappingURL=NodeHeading.js.map