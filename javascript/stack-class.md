Create a Stack class that has peek, pop, & push methods. Count read-only property.

```js
const stack = new Stack()
stack
```

Inspect stack obj prints the below on console

```
v Stack {}
  count: 0
  v __proto__:
    > constructor: class Stack
      count: (...)
    > peek: f peek()
    > pop: f pop()
    > push: f push()
    > get count: f count()
    > __proto__: Object
```

```js
stack.push('a')
stack.push('b')
stack.push('c')
```
