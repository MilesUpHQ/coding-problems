## Write code to invert the tree, move left nodes to right and vice-versa

```js
const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 },
  },
  right: {
    value: 3,
    left: { value: 6 },
    right: { value: 7 },
  },
};
```

## Solution

```js
function invertTree(node) {
  let left = node.left;
  if (node.left) node.left = node.right;
  if (node.right) node.right = left;
  if (node.left) invertTree(node.left);
  if (node.right) invertTree(node.right);
  return node;
}

const node = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 },
  },
  right: {
    value: 3,
    left: { value: 6 },
    right: { value: 7 },
  },
};

invertTree(node);
```
