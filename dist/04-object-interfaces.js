"use strict";
//object type annotation
let user = {
    name: "rudra",
    age: 22,
    id: 1,
};
// let user: { name: string; age: number } = {
//   name: "rudra",
//   age: 22,
// };
console.log(user.name);
let laptop = {
    name: "Macbook pro",
    price: 2000,
    getDiscountedPrice(percentage) {
        return this.price * (percentage / 100);
    },
};
console.log(laptop.getDiscountedPrice(10)); // Output: 200
//# sourceMappingURL=04-object-interfaces.js.map