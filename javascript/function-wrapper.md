Write a wrap function that takes the execute function as an argument and returns a modified function so that the following requirements are met:

Any result returned by the function execute should be returned from the modified function unchanged.
If the function execute throws an error, the modified function should return null.
After the function execute has thrown an error, its future executions should be prevented and null should be returned.
Multiple wrapped functions can coexist.
The execute function doesn't take any arguments.

```js
function wrap (execute) {
  // Return modified function
}

var errorExec = wrap(function () {
  throw new Error('Error');
});
var resultExec = wrap(function () {
  return "Result";
});
console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"
```
