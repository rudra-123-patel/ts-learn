// type assertions (type casting)

let someValue: unknown = "Hello, TypeScript!";
// let strLength: number = someValue.length; // Error: Object is of type 'unknown'.

let strLength: number = (someValue as string).length;
//or
let strLength2: number = (<string>someValue).length;

// type guards

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// instanceof type guard

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
