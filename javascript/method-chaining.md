### Javascript Method Chaining

Can you implement a set of methods which can be chained together?

Some examples;<br/>`calculator.sum(23).subtract(3).multiply(2).result()` should output **40**<br/>`calculator.sum(10, 30).subtract(15).multiply(6).result()` should output **150**<br/>`calculator.sum(10, 10, 3, 5).subtract(5).multiply(2).result()` should output **46**
#### Answer:

```javascript
const calculator = {
    res: 0,
    sum: function (...args) {
        this.res = args.reduce((sum, current) => sum + current, 0);
        return this;
    },
    subtract: function (a) {
        this.res = this.res - a;
        return this;
    },
    multiply: function (a) {
        this.res = this.res * a;
        return this;
    },
    result: function () {
        return this.res
    }
}
```
