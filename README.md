# Elena Editor

This is a project to provide various types of editors to front end developers.

**Current Progress**

- Flow Chart Editor - React

**Coming Features**

- Monaco Editor

## Installation

```js
npm install elena-editor
```

or

```js
yarn add elena-editor
```

## Documentation

### Flow Chart Editor (React)

```js
import { FlowEditor } from "elena-editor";
```

#### Props

```js
export interface ElenaNode {
  type: NodeType;
  name: string;
  id: string;
  xPos: number;
  yPos: number;
  isStatic: boolean;
  priority: number;
  inputs?: string[];
  outputs?: string[];
  code?: string;
}
```

The Flow Chart Editor uses a Node menu to specify which nodes are available to the user. The type of this menu is an array of ElenaNodes, shown above.
