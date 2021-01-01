### Create a markdown inline link for Table of contents

input: `str = 'How do you use singletons in Ruby?';`

output: 

`'[How do you use singletons in Ruby?](#how-do-you-use-singletons-in-ruby)'`

Also, what about special characters like => or >>

input: `str = 'How do you use exception => e in Ruby?';`

output: `'[How do you use exception => e in Ruby?](#how-do-you-use-exception--e-in-ruby)'`

### Solution:

```js
str = 'How do you use singletons in Ruby?';

function mdLink(str) {
  let regex = /[^a-z0-9\s\_]/gi;
  let link = `[${str}](#${str
    .toLowerCase()
    .replace(regex, '')
    .split(' ')
    .join('-')})`;
  return link;
}
mdLink(str);
```
