//type alias

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

// type alias for primitives

type ID = string | number;

let userId: ID = "abc123";
let productId: ID = 123456;

// type alias vs interface

// interface can be extended
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  age: 5,
};

// Interface can be merged and decalared multiple times

interface Animal {
  age: number;
}

interface Animal {
  name: string;
}

let dog: Animal = {
  name: "Buddy",
  age: 5,
};

// interface for objects
// type alias for unions and intersections

interface User {
  name: string;
  age: number;
}

type UserID = string | number;
