### How to use generators in js

Can you create a simple ecommerce state machine to update order state using generator so we can do

`order.next()` to update state


### Simple Solution:

```js
const myFirstGenerator = function* () {
  const one = yield 1;
  const two = yield 2;
  const three = yield 3;

  return 'Finished!';
};

const gen = myFirstGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```
