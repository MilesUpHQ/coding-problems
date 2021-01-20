Create a function that lets people easily grab only the array elements with given keys.

For example:

```js
var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']
```

Note: The order of the elements should be preserved in the resulting array.

## Solution

```js
Array.prototype.only = function(keys)
{
  if(!Array.isArray(keys)) keys = [keys];
  return this.filter((a,i) => keys.includes(i));
}
```
