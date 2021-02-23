
### Javascript Proxies <sup>**`advanced`**</sup>

#### Use Proxy to validate an Object by enforcing a maximum number of characters for product description.

If maximum character for description property is 5;

setting `productProxy.description = 'Hello World!!'`, description property should hold only `'Hello'`

setting `productProxy.description = 'Good Morning'`, description property should hold only `'Good '`

### Answer

```javascript
const product = {};
const handler = {
    set: function(target, key, value) {
        if(key==='description' && value.length > 5) {
            value = value.substring(0, 5)
        }
        target[key] = value
    }
}

const productProxy = new Proxy(product, handler);
```
[reference](https://blog.logrocket.com/practical-use-cases-for-javascript-es6-proxies/)
