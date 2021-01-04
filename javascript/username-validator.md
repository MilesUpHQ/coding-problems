Implement the validate function, which accepts a username and returns true if it's acceptable and false if it's not.

A username is valid if it satisfies the following rules:

The username must be at least 4 characters long.
The username must contain only letters, numbers and optionally one underscore (_).
The username must start with a letter, and must not end with an underscore.
For example, validate("Mike Standish"); would return false because it contains a space.

```js
function validate(username) {
    // Write the code that goes here
}

console.log(validate('Mike_Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username
```
