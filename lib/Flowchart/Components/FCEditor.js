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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { DragTypes, renderNode } from "./Nodes/FCNodes";
import { v4 as uuid } from "uuid";
import Xarrow from "react-xarrows/lib";
var UnstyledFCEditor = function (props) {
    return (_jsxs("div", __assign({ className: props.className }, { children: [props.nodes.map(function (node) {
                return renderNode(node, props.mode, true, props.setMode, props.removeNode);
            }),
            props.relations &&
                props.relations.map(function (relation, index) {
                    return _jsx(Xarrow, __assign({}, relation), index);
                })] }), void 0));
};
var FCEditor = styled(UnstyledFCEditor)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n\n  background-color: ", ";\n"])), function (props) { return (props.isOver ? "#e5e9f0" : "#2e3440"); });
var UnstyledFCEditorContainer = function (props) {
    var _a = useState([]), nodes = _a[0], setNodes = _a[1];
    var _b = useState([]), relations = _b[0], setRelations = _b[1];
    var _c = useState("Normal"), mode = _c[0], setMode = _c[1];
    var editorRef = useRef(null);
    useEffect(function () {
        if (props.nodes) {
            setNodes(props.nodes);
        }
        if (props.relations) {
            setRelations(props.relations);
        }
    }, [props.nodes, props.relations]);
    var _d = useDrop(function () { return ({
        accept: DragTypes.NODE,
        collect: function (monitor) { return ({
            isOver: !!monitor.isOver(),
        }); },
        drop: function (item, monitor) {
            if (editorRef.current) {
                var editorDimensions = editorRef.current.getBoundingClientRect();
                var dropCoordinates = monitor.getSourceClientOffset();
                var xCoordinate = dropCoordinates.x - editorDimensions.x;
                var yCoordinate = dropCoordinates.y - editorDimensions.y;
                if (item.id.split("_")[0] === "base") {
                    var newNode = {
                        id: uuid(),
                        isStatic: false,
                        priority: 0,
                        name: item.name,
                        type: item.type,
                        xPos: xCoordinate,
                        yPos: yCoordinate,
                        inputs: item.inputs ? item.inputs : undefined,
                        outputs: item.outputs ? item.outputs : undefined,
                    };
                    addNode(newNode);
                }
                else {
                    moveNode(item.id, { x: xCoordinate, y: yCoordinate });
                }
            }
        },
    }); }), isOver = _d[0].isOver, drop = _d[1];
    var addNode = function (newNode) {
        setNodes(function (prevNodes) { return __spreadArray(__spreadArray([], prevNodes), [newNode]); });
    };
    var removeNode = function (targetNode) {
        setNodes(function (prevNodes) {
            var index = prevNodes.findIndex(function (node) { return node.id === targetNode.id; });
            if (index === -1)
                return prevNodes;
            var newNodes = __spreadArray([], prevNodes);
            newNodes.splice(index, 1);
            return newNodes;
        });
    };
    var moveNode = function (id, newPos) {
        setNodes(function (prevNodes) {
            var newNodes = __spreadArray([], prevNodes);
            var movedNode = newNodes.find(function (node) { return node.id === id; });
            if (movedNode) {
                var prevPriority_1 = movedNode.priority;
                movedNode.priority = newNodes.length;
                movedNode.xPos = newPos.x;
                movedNode.yPos = newPos.y;
                newNodes.forEach(function (newNode) {
                    if (newNode.priority > prevPriority_1) {
                        newNode.priority--;
                    }
                });
            }
            return newNodes;
        });
    };
    return (_jsx("div", __assign({ className: props.className, ref: drop }, { children: _jsx("div", __assign({ ref: editorRef, id: "pos-container" }, { children: _jsx(FCEditor, { isOver: isOver, nodes: nodes, mode: mode, setMode: setMode, removeNode: removeNode }, void 0) }), void 0) }), void 0));
};
export var FCEditorContainer = styled(UnstyledFCEditorContainer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80%;\n  height: 100%;\n  position: static;\n\n  & #pos-container {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  width: 80%;\n  height: 100%;\n  position: static;\n\n  & #pos-container {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=FCEditor.js.map