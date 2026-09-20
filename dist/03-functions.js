"use strict";
//basic function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
// optional parameters (greeting is optional)
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!
//rest parameter
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
//arrow function
const divide = (a, b) => a / b;
//function type 
//# sourceMappingURL=03-functions.js.map