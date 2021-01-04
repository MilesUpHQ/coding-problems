Check if brackets are matching or not

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

**What is considered Valid?**

A string of braces is considered valid if all braces are matched with the correct brace.

Examples

```js
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```

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

```js
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
```
