"use strict";
// primitives
let username = " rudra";
let age = 22;
let isAdmin = true;
// arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
// tuples
let person = ["rudra", 22];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
//any (not safe, should be avoided)
let randomValue = 10;
randomValue = "rudra";
randomValue = true;
//Unknown (safer than any)
let userInput;
userInput = 5;
userInput = "rudra";
//void (for function that dont return anything)
function subscribe(message) {
    console.log(message);
}
//null and undefined
let u = undefined;
let n = null;
//# sourceMappingURL=02-types.js.map