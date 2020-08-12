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

Another solution:

function matchingBrackets(data) {
  let bracketList = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let closed = ['}', ')', ']'];

  let result = [];
  for (el of data) {
    if (bracketList[el]) {
      result.push(bracketList[el]);
    } else if (closed.indexOf(el) > -1) {
      if (result.pop() != el) return 'Not Matching';
    }
  }
  return result.length > 0 ? 'Not Matching' : 'Matching';
}

console.log(matchingBrackets('[]([a+b)])'));
