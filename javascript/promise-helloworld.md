Create a resolved javascript Promise that will return 'Hello World!'.

```js
function promiseHelloWorld() {
  // replace this nonsense with your Promise
  return / / ? '' : (() => 'Hello World!')();
}
```

Test Case:

```js
Test.describe('Basic Test', () => {
  Test.it('Hello World!', () => {
    promiseHelloWorld().then(response => Test.assertEquals(response, 'Hello World!', 'Simple Single call test'));
  });
});
```

### Solution 1

```js
async function promiseHelloWorld() {
  return 'Hello World!';
}
```

### Solution 2

```js
const promiseHelloWorld = () => new Promise(resolve => resolve('Hello World!'));
```
