### How to use generators in js

Can you create a simple ecommerce state machine to update order state using generator so we can do

```js
order = // initialise order with a generator function
order.next() //to update state

order.next() // order created
order.next() // order confirmed
order.next() // order shipped
order.next() // order delivered
```


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
