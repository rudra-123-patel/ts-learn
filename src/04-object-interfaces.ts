//interface
interface User {
  name: string;
  age: number;
  email?: string; // optional property , ? means optional
  readonly id: number; // read only property, cannot be modified after initialization
}

//object type annotation
let user: User = {
  name: "rudra",
  age: 22,
  id: 1,
};

// let user: { name: string; age: number } = {
//   name: "rudra",
//   age: 22,
// };

console.log(user.name);

// interface with methods

interface Product {
  name: string;
  price: number;
  getDiscountedPrice(percent: number): number;
}

let laptop: Product = {
  name: "Macbook pro",
  price: 2000,
  getDiscountedPrice(percentage: number): number {
    return this.price * (percentage / 100);
  },
};

console.log(laptop.getDiscountedPrice(10)); // Output: 200
