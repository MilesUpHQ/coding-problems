Check if brackets are matching or not

Solution:

```js
let isParanthesisMatch = (str) => {
  let stack = [];

  let openParam = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  let closeParam = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let index = 0; index < str.length; index++) {
    let element = str[index];

    if (openParam[element]) {
      stack.push(element);
    } else if (closeParam[element]) {
      if (openParam[stack.pop()] !== element) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isParanthesisMatch('{({][]})}[()]{}'));
```
