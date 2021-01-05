We have a backend api that allows sending one file to upload
Make multiple async calls to save 3 images to server simultaneously using promise and respond with success message only when all the images have been uploaded

```js
var promise1 = Promise.resolve(catSource);
var promise2 = Promise.resolve(dogSource);
var promise3 = Promise.resolve(cowSource);

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array ["catData", "dogData", "cowData"]
```
