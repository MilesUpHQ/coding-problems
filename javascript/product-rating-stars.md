The product rating HTML widget consists of 5 stars. Each star is represented by a span element. This is the widget's HTML code:

```html
<div id='rating'>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
</div>
```

When a span element is clicked, class active should be added to that span element and to all span elements before it. Also, class active should be removed from all span elements after it, if there are any.

For example, after the third span element has been clicked, the HTML code should look like this:

```html
<div id='rating'>
  <span class="active">*</span>
  <span class="active">*</span>
  <span class="active">*</span>
  <span>*</span>
  <span>*</span>
</div>
```

Complete the setup function that registers click event handlers and implements the logic of the HTML widget.

starting code:

```js
function setup() {
  // Write your code here.
}

// Example case. 
document.body.innerHTML = `
<div id='rating'>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
</div>`;

setup();

document.getElementsByTagName("span")[2].click();
console.log(document.body.innerHTML);
```
