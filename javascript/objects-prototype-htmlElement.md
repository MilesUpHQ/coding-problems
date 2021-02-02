Create 2 object constructor function `HtmlElement` & `HtmlSelectElement` so I can do the following on console:

```js
const e = new HtmlElement()
e
```
inspecting `e` on the browser console should show a `click` function, and a `focus` function in it's prototype as seen below:

```
v HtmlElement
  > click: f()
  > __proto__:
    > focus: f()
```

```js
e.click() // print "clicked"
e.focus() // print "focused"
```

Then,

Create a HtmlSelectElement object with the following method

```js
const s = new HtmlSelectElement([])
s
```

now, inspecting `s` on the browser console will show the following:

```
v HtmlSelectElement
  > addItem: f()
  > items: []
  > removeItem: f()
  > __proto__: HtmlElement
```

```js
s.addItem('1')
s.addItem('2')
s.removeItem('2')
s
```

inspect `s` again on browser console will look like:

```
v HtmlSelectElement
  > addItem: f()
  > items: ['1']
  > removeItem: f()
  > __proto__: HtmlElement
    > click: f()
    > __proto__: 
      > focus: f()
      > constructor: f HtmlElement()
      > __proto__: Object

```

Note: Try doing all the above using extend first and then with prototype (without class)

### Solution

```js
function HtmlElement(){
  this.click = function(){
    console.log("clicked")
  }
}

HtmlElement.prototype.focus = function(){
  console.log("focused")
}

function HtmlSelectElement(items = []){
  this.items = items
  
  this.addItem = function(item){
    this.items.push(item)
  }
  
  this.removeItem = function(item){
    this.items.splice(this.items.indexOf(item), 1)
  }
  
  this.render = function(){
    return `
    <select>${this.items.map(item => `
    <option>${item}</option>).join('')}
    </select>`
  }
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype) // this might not work because it doesn't inherit the click method so

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
```


2. Also, add a render method

```js
s.render()

// <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
   </select>
```

3. Create a new img method

```js
const img = new HtmlImageElement()
// it can take src arugument if not passed, it is undefined
// it inherits from HtmlElement
// it has the click method and the focus method in the prototype
img.src = "https://magesh.io/image/1.jpg"
img.render()
// <img src="https://magesh.io/image/1.jpg" />
```

### Solution

```js
function HtmlImageElement(src){
  this.src = src
  
  this.render = function(){
    return `<img src="${src}" />`
  }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement;

```
