### Javascript Closures

Can you implement a function which can be called like below;

`sum(1)(2)(3)(4)...` and output must be the sum of all parameters passed.<br /><br />
some examples,<br />
for `sum(1)(2)(3)()` output must be 6.<br />
for `sum(2)(4)(5)(10)()` output must be 21.<br />

#### Answer:
```javascript
const sum = (a) => {
    return (b) => {
        if (b === undefined) {
            return a;
        } else return sum(a + b);
    }
};
```
